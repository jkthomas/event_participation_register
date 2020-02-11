import server from "../../src/App";
import { Response, Request } from "supertest";
import supertest = require("supertest");
import { disconnect } from "mongoose";

const request = supertest(server);
describe("Test register endpoints", () => {
  it("should create participant", async done => {
    const participant = {
      firstName: "John",
      lastName: "John",
      email: "John@John.com",
      eventDate: "2012-11-04T14:51:06.157Z"
    };
    const result = await request.post("/event/register").send(participant);
    expect(result.status).toEqual(201);
    expect(result.badRequest).toEqual(false);
    expect(result.body).toHaveProperty("firstName");
    expect(result.body).toHaveProperty("lastName");
    expect(result.body).toHaveProperty("email");
    expect(result.body).toHaveProperty("eventDate");
    done();
  });
  it("should return 400 without body", async done => {
    const result = await request.post("/event/register");
    expect(result.status).toEqual(400);
    expect(result.badRequest).toEqual(true);
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors.length).toBeGreaterThan(0);
    expect(result.body.errors[0]).toContain("required");
    done();
  });
  it("should return 400 with bad email pattern", async done => {
    const participant = {
      firstName: "John",
      lastName: "John",
      email: "John@John",
      eventDate: "2012-11-04T14:51:06.157Z"
    };
    const result = await request.post("/event/register").send(participant);
    expect(result.status).toEqual(400);
    expect(result.badRequest).toEqual(true);
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors.length).toBeGreaterThan(0);
    expect(result.body.errors[0]).toContain("Invalid email pattern");
    done();
  });
  it("should return 400 with too long first name", async done => {
    const participant = {
      firstName: "JohnABCDEFGHIJKLABCDEFGHIJKLABCDEFGHIJKLABCDEFGHIJKL",
      lastName: "John",
      email: "John@John.com",
      eventDate: "2012-11-04T14:51:06.157Z"
    };
    const result = await request.post("/event/register").send(participant);
    expect(result.status).toEqual(400);
    expect(result.badRequest).toEqual(true);
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors.length).toBeGreaterThan(0);
    expect(result.body.errors[0]).toContain(
      "First name can't have more than 32 characters"
    );
    done();
  });

  it("should return 400 with incorrect event date value", async done => {
    const participant = {
      firstName: "John",
      lastName: "John",
      email: "John@John.com",
      eventDate: "2012-04T14:06.157Z"
    };
    const result = await request.post("/event/register").send(participant);
    expect(result.status).toEqual(400);
    expect(result.badRequest).toEqual(true);
    expect(result.body).toHaveProperty("errors");
    expect(result.body.errors.length).toBeGreaterThan(0);
    expect(result.body.errors[0]).toContain("has invalid value");
    done();
  });
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
