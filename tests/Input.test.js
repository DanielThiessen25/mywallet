import app from '../src/app.js';
import supertest from 'supertest';
import connection from '../src/database.js';

beforeEach(async () => {
    await connection.query(`DELETE FROM logs`);
});

describe("POST /nova-entrada", () => {
    var token = null;
    const loginInfo = {
        email: "jest@teste.com",
        password: "senha"
    }
    beforeEach( () => {
        supertest(app).post("/").send(loginInfo).end((err, res) => {
        token = res.body.token;
        });

    });
    it("returns 201 for valid params", async () => { 

        const body = {
            value: '20',
            description: 'Presente'
          };
        const result = await supertest(app).post("/nova-entrada").send(body).set('Authorization', 'Bearer  c2e9df66-072f-48d8-a48f-844a209042c4');
        const status = result.status;
        expect(status).toEqual(201);
    });
  
    it("returns 400 for invalid params", async () => {
        const body = {};
        const result = await supertest(app).post("/nova-entrada").send(body).set('Authorization', 'Bearer c2e9df66-072f-48d8-a48f-844a209042c4');
        const status = result.status;
        expect(status).toEqual(400);
    });
});

afterAll(() => {
    connection.end();
  });