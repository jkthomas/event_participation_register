import * as express from "express";
import { RegisterController } from "../Controllers/RegisterController";

export namespace RegisterRoutes {
  export function createRegisterRoutes(): express.Router {
    let registerRouter = express.Router();

    registerRouter.get("/", RegisterController.getDefaultRoute);

    return registerRouter;
  }
}
