import * as express from 'express';
import { isAuthorized } from '../service/auth-service';
import { findAll, findByEmail, updateOne, deleteOne } from '../service/user-service';
import { send200, send404, send401 } from '../util/response';

const userRouter = express.Router();

userRouter.get('/all', (req: any, res: any) => {
    if (isAuthorized(req.headers)) {
        findAll().then((userList: any) => {
            send200(res, userList);
        }).catch((err: any) => send404(res, err));
    } else {
        send401(res);
    }
});

userRouter.get('/me', (req: any, res: any) => {
    const user = isAuthorized(req.headers);
    if (user) {
        findByEmail(user.email).then((user: any) => {
            send200(res, user);
        }).catch((err: any) => send404(res, err));
    } else {
        send401(res);
    }
});

userRouter.patch('/:id', (req: any, res: any) => {
    if (isAuthorized(req.headers)) {
        updateOne(req.params.id, req.body).then((user: any) => {
            send200(res, user.id);
        }).catch((err: any) => send404(res, err));
    } else {
        send401(res);
    }
});

userRouter.delete('/:id', (req: any, res: any) => {
    if (isAuthorized(req.headers)) {
        deleteOne(req.params.id).then((user: any) => {
            send200(res, user.id);
        }).catch((err: any) => send404(res, err));
    } else {
        send401(res);
    }
});

module.exports = userRouter;