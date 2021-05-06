const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
    it("responds with Hello, This Is The Default!", (done) => {
        request(app).get("/").expect("Hello, This Is The Default!", done);
    })
});

