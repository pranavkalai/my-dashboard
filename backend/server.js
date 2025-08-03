import express from 'express'
import cors from 'cors'
import { Pool } from 'pg'
import dotenv from 'dotenv'

dotenv.config(); 
const app = express();
app.use(express.json());
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

app.get('/home', (req, res) => {
    const date = new Date();
    const dateInWords = date.toDateString();
    const home_response = {
        date: dateInWords
    }
    res.json(home_response);
})
app.get('/home/vehicles', async (req, res) => {
    const vehicle_response = await pool.query('SELECT * FROM vehicle_records');
    res.json(vehicle_response.rows);
})
app.get('/home/vehicles/:id', async (req, res) => {
    const vehicleId = req.params.id;
    const vehicle_response = await pool.query(
        'SELECT * FROM vehicle_records WHERE id = $1;',
        [vehicleId]
    );
    res.json(vehicle_response.rows[0]);
})
app.post('/home/vehicles/add', async (req, res) => {
    const { name, registration } = req.body;
    await pool.query(
        'INSERT INTO vehicle_records (name, registration) VALUES ($1, $2)',
        [name, registration]
    )
    // console.log(`Vehicle added: Name - ${name}, Registration - ${registration}`);
    res.status(200).send('Received vehicle data');
})
app.post('/home/vehicles/:id/update/:attribute', async (req, res) => {
    const vehicleId = req.params.id;
    const attribute = req.params.attribute;
    const { updatedAttribute } = req.body;
    await pool.query(
        `UPDATE vehicle_records SET ${attribute} = $1 WHERE id = $2`,
        [updatedAttribute, vehicleId]
    )
    res.status(200).send('Received vehicle data');
})
app.delete('/home/vehicles/:id/delete', async (req, res) => {
    const vehicleId = req.params.id;
    await pool.query(
        'DELETE FROM vehicle_records WHERE id = $1',
        [vehicleId]
    );
    console.log(`Vehicle with ID ${vehicleId} deleted`);
    res.status(200).send('Vehicle deleted successfully');
})

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})