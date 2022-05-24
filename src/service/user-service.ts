const User = require("../document/user");
import { Number } from 'mongoose';
import { hashSync, createToken } from '../service/auth-service';

export async function create(user: any) {
    user.password = hashSync(user.password);
    return User.create(user);
}

export async function verify(user: any, passwordToVerify: string) {
    return createToken(user, passwordToVerify);
}

export async function findAll() {
    return User.find({}).select('-password');
}

export async function findOne(user: any) {
    return User.findOne(user);
}

export async function findByEmail(email: string) {
    return User.findOne({ 'email': email }).select('-password');
}

export async function findByEmailWithPassword(email: string) {
    return User.findOne({ 'email': email });
}

export async function updateOne(id: number, user: any) {
    user.password = undefined;
    user.email = undefined;
    return User.findByIdAndUpdate({ _id: id }, user);
}

export async function deleteOne(id: Number) {
    return User.deleteOne({ _id: id });
}
