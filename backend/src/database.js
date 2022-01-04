import mysql from 'mysql2/promise'
import {config as dotenv} from 'dotenv';
dotenv();

export const connection = async () => {
    return await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
    })
}
