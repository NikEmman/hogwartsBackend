const request = require("supertest");
const app = require("../index");

describe("GET /houses API", () => {
  test("Should return response in JSON format", async () => {
    const response = await request(app).get("/houses");
    expect(response.status).toBe(200);
    expect(response.headers["content-type"]).toMatch(/application\/json/);
  });

  test("Should return all houses when no query param is given", async () => {
    const response = await request(app).get("/houses");
    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test("Should return filtered houses based on query param", async () => {
    const response = await request(app).get("/houses?name=gryff");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: expect.stringMatching(/gryffindor/i) }),
      ])
    );
  });

  test("Should return empty array if no matching house is found", async () => {
    const response = await request(app).get("/houses?name=noSuchHouse");
    expect(response.status).toBe(200);
    expect(response.body.length).toEqual(0);
  });
});

describe("Invalid Routes", () => {
  test("Should return 404 for calling wrong route", async () => {
    const response = await request(app).get("/doors");
    expect(response.status).toBe(404);
  });
});
