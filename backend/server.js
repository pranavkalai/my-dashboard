import express from 'express'
import cors from 'cors'
import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config(); 
const app = express();
const date = new Date();
const dateInWords = date.toDateString();

const corsOptions = {
    origin: ['http://localhost:5173'] // frontend port
}

const pool = new Pool({ //connction config
   user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

app.use(cors(corsOptions));

// const result = await pool.query('SELECT * FROM cars');
// const x = result.rows[0];

const response = {
    date: dateInWords,
    // message: x
}

const vehicle_data = await pool.query('SELECT * FROM vehicle_records');
console.log(vehicle_data.rows);

app.get('/home/vehicles', (req, res) => {
    res.json(vehicle_data.rows[0]);
})


app.get('/home', (req, res) => {
    res.json(response);
})

app.listen(8080, () => {
  console.log('Server is running on port 8080');
})