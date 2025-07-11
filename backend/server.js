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
app.use(cors(corsOptions));

const pool = new Pool({
   user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const home_response = {
    date: dateInWords,
}
const vehicle_response = await pool.query('SELECT * FROM vehicle_records');
console.log(vehicle_response.rows);

app.get('/home', (req, res) => {
    res.json(home_response);
})
app.get('/home/vehicles', (req, res) => {
    res.json(vehicle_response.rows);
})
app.listen(8080, () => {
  console.log('Server is running on port 8080');
})