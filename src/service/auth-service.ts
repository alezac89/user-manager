const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export async function createToken(user: any, passwordToVerify: string) {
    let match = bcrypt.compareSync(passwordToVerify, user.password);
    if (match) {
        user.password = undefined;
        let token = jwt.sign(user.toJSON(), process.env.SECRET);
        if (typeof token !== undefined) {
            return { token: token };
        } else {
            return null;
        }
    } else {
        return null;
    }
}

export function hashSync(password: string) {
    return bcrypt.hashSync(password, 10);
};

export function isAuthorized(headers: any) {
    try {
        const token = headers.authorization.split(' ')[1];
        return jwt.verify(token, process.env.SECRET);
    } catch {
        return false;
    }
}
