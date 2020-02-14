import { Express } from "express";
import { RegisterController } from "../Controllers/RegisterController";

export namespace RegisterRoutes {
  export function createRegisterRoutes(App: Express): void {
    App.post("/event/register", RegisterController.registerParticipant);
  }
}
