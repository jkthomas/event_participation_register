import { Express, Request, Response } from 'express';

export namespace RegisterController {
    export async function getDefaultRoute(req: Request, res: Response) {
        res.send({ test: 'test' });
    }
}