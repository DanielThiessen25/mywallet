import pg from 'pg';

const databaseConfig = {
    user: 'postgres',
    password: 'senha',
    database: 'mywallet',
    host: 'localhost',
    port: 5432
};

const { Pool } = pg;
const connection = new Pool(databaseConfig);

export default connection;