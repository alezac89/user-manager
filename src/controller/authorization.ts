import * as express from 'express';
import { findByEmail, create, verify, findByEmailWithPassword } from '../service/user-service';
import { send200, send201, send404 } from '../util/response';

const authRouter = express.Router();
authRouter.post('/signup', (req: any, res: any) => {
    findByEmail(req.body.email).then((user: any) => {
        if (!user) {
            create(req.body).then((data: any) => {
                send201(res, data._id);
            }).catch((err: any) => send404(res, err));
        } else {
            send404(res, "email already present");
        }
    }).catch((err: any) => send404(res, err))
});

authRouter.post('/login', async (req: any, res: any) => {
    findByEmailWithPassword(req.body.email).then((user: any) => {
        if (!user) {
            send404(res, "Error, email or password incorrect");
        } else {
            verify(user, req.body.password).then((token: any) => {
                if (token) {
                    send200(res, token);
                } else {
                    send404(res, "Error, email or password incorrect");
                }
            }).catch((err: any) => send404(res, err));

        }
    }).catch((err: any) => send404(res, err));
});

module.exports = authRouter;