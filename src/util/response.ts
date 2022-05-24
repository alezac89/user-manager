export function send200(res: any, data: any) { return res.send(data); }
export function send201(res: any, data: any) { return res.send(data); }
export function send404(res: any, message: any) { return res.status(404).send({ error: message }); }
export function send401(res: any) { return res.status(401).send({ error: 'Not Authorized' }); }