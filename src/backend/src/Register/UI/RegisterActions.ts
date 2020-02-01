import { Express, Request, Response } from 'express';

export namespace RegisterActions {
    export function registerRoutes(App: Express): void {
        App.get('/', RoutesHandlers.getDefault);
        console.log("Registered register routes")
    }

    namespace RoutesHandlers {
        export async function getDefault(req: Request, res: Response) {
            res.send({ test: 'test' });
        }
    }
}