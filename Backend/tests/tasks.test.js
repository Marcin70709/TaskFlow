const request = require("supertest");
const app = require("../app");

describe("Task API", () => {
  test("GET /api/tasks returns empty array", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test("POST /api/tasks adds task", async () => {
    const res = await request(app)
      .post("/api/tasks")
      .send({ title: "Test task" });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test task");
  });

  test("DELETE /api/tasks/:id deletes task", async () => {
    const post = await request(app)
      .post("/api/tasks")
      .send({ title: "To delete" });

    const id = post.body.id;

    const res = await request(app).delete(`/api/tasks/${id}`);
    expect(res.statusCode).toBe(204);
  });
});