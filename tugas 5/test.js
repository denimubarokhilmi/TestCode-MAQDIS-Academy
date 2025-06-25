import supertest from "supertest";
import { app } from "./app.js";
import assert from "node:assert/strict";
import { describe, it } from "node:test";

const request = supertest(app);

describe("endpoinst testing, test competion", () => {
    it("should return welcome message from GET /hello", async () => {
        const res = await request.get('/hello');
        assert.deepEqual(res.body, {
            status: "success",
            message: "welcome to Maqdis Academy"
        });

        assert.equal(res.status, 200)
    });

    it("should return endpoinst /send-data", async () => {
        const res = await request.post("/send-data").send({});
        assert.deepEqual(res.body, { data: 100, status: 'Berhasil' });
        assert.equal(res.status, 200)
    });

    it('should return endpoinst /delete-data ', async () => {
        const res = await request.post("/delete-data").send({});
        assert.deepEqual(res.body, { data: 0, status: 'Berhasil dihapus' });
        assert.equal(res.status, 200)
    });

    it("should return endpoinst /delete-deposit", async () => {
        const res = await request.post("/delete-deposit").send({});
        assert.deepEqual(res.body, { message: 'berhasil', id_setoran: 58, id_user: 3441, id_juz: 30 });
        assert.equal(res.status, 200);
    });
})