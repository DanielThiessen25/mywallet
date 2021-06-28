import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pg from 'pg';
import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';

const app = express();
app.use(cors());
app.use(express.json());

const databaseConfig = {
    user: 'postgres',
    password: 'senha',
    database: 'mywallet',
    host: 'localhost',
    port: 5432
};

const { Pool } = pg;
const connection = new Pool(databaseConfig);

app.post("/sign-up", async (req, res) => {
    const { name, email, password } = req.body;
    const passwordHash = bcrypt.hashSync(password, 10);
    await connection.query(` INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`, [name, email, passwordHash]);
    res.sendStatus(201);
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    const result = await connection.query(`SELECT * FROM users WHERE email = $1`, [email]);
    const user = result.rows[0];
    if (user && bcrypt.compareSync(password, user.password)) {
        const token = uuid();
        await connection.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2) `, [user.id, token]);
        res.send({ ...user, token: token });

    } else {
        res.sendStatus(401);
    }
});

app.get("/records", async (req, res) => {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    const result = await connection.query(`SELECT * FROM sessions JOIN users ON sessions."userId" = users.id WHERE sessions.token = $1`, [token]);
    const user = result.rows[0];
    if (user) {
        const call = await connection.query(`SELECT * FROM logs WHERE logs."userId" = $1`, [user.userId]);
        const recordsList = call.rows;
        res.send(recordsList);
    } else {
        res.sendStatus(401);
    }
});

app.post("/nova-entrada", async (req, res) => {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    const result = await connection.query(`SELECT * FROM sessions JOIN users ON sessions."userId" = users.id WHERE sessions.token = $1`, [token]);
    const user = result.rows[0];
    if (user) {
        const { value, description } = req.body;
        let now = dayjs();
        const date = now.format('DD/MM');
        console.log(date);
        const add = await connection.query(`INSERT INTO logs (date, description, value, "userId", operation) VALUES ($1, $2, $3, $4, $5)`, [date, description, value, user.userId, "in"]);
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }

});

app.post("/nova-saida", async (req, res) => {
    const authorization = req.headers['authorization'];
    const token = authorization?.replace('Bearer ', '');

    if (!token) return res.sendStatus(401);

    const result = await connection.query(`SELECT * FROM sessions JOIN users ON sessions."userId" = users.id WHERE sessions.token = $1`, [token]);
    const user = result.rows[0];
    if (user) {
        const { value, description } = req.body;
        let now = dayjs();
        const date = now.format('DD/MM');
        console.log(date);
        const add = await connection.query(`INSERT INTO logs (date, description, value, "userId", operation) VALUES ($1, $2, $3, $4, $5)`, [date, description, value, user.userId, "out"]);
        res.sendStatus(200);
    } else {
        res.sendStatus(401);
    }

});

app.listen(4000);