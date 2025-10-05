import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';
dotenv.config();

const caBuffer = Buffer.from(process.env.TIDB_CA || '', 'utf-8');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, 
  port: Number(process.env.DB_PORT) || 4000,
  ssl: {
    // TiDB provides certificates for serverless clusters
    ca: caBuffer,
    rejectUnauthorized: true,
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection()
  .then(() => console.log('Connected to MySQL Database'))
  .catch((err) => console.error('Error connecting to MySQL:', err.message));

export default pool;






/* 

| Tables_in_libraryMngmt |
+-------------------------+
| AUTHORS                 |
| BOOKS                   |
| BOOK_CATEGORY           |
| READERS                 |
| RETURN_DATES            |
| SALARIES                |
| STAFF                   |
| TEST                    |
| USERS   

*/