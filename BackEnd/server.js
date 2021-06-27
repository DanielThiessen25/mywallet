import express from 'express';
import cors from 'cors';
import bcrypt from 'bcrypt';
import pg from 'pg';
import { v4 as uuid } from 'uuid';

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
    await connection.query(` INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,[name, email, passwordHash]);
    res.sendStatus(201);
});

app.post("/", async (req, res) => {
    const { email, password } = req.body;
    const result = await connection.query(`SELECT * FROM users WHERE email = $1`,[email]);
    const user = result.rows[0];
    if(user && bcrypt.compareSync(password, user.password)) {
        const token = uuid();
        await connection.query(`INSERT INTO sessions ("userId", token) VALUES ($1, $2) `, [user.id, token]);
        console.log({...user, token:token});
        res.send({...user, token:token});

    } else {
        res.sendStatus(401);
    }
});

app.listen(4000);