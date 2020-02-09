import server from "../../src/App";
import { Response, Request } from "supertest";
import supertest = require("supertest");
import { disconnect } from "mongoose";

const request = supertest(server);
describe("Test register endpoints", () => {
  it("Register", async done => {
    const result = await request.post("/event/register");
    expect(result.status).toEqual(400);
    done();
  });
  //TODO: Add rest of tests
});

afterEach(done => {
  server.close(done);
});

afterAll(async () => {
  try {
    await disconnect();
    await server.close();
  } catch (error) {
    console.error(error);
    throw error;
  }
});
