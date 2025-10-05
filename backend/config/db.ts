import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
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