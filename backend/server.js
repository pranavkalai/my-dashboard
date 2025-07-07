import express from 'express'
import cors from 'cors'
import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config(); 
const app = express();

const corsOptions = {
    orgin: ['http://localhost:5173'] // frontend port
}

const pool = new Pool({ //connction config
   user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

app.use(cors(corsOptions));

const result = await pool.query('SELECT * FROM cars');
const x = result.rows[0]; 

app.get('/', (req, res) => {
    res.json(x);
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})