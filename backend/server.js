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

app.get('/api', (req, res) => {
    try {
        const date = new Date();
        const dateString = date.toDateString();
        const homeResponse = { date: dateString }; // Left as JSON for future expansion
        return res.status(200).json(homeResponse);
    }
    catch (err) {
        console.error('Error Fecthing Data:', err);
        return res.status(500).send('Server Error');
    }
});
app.get('/api/vehicles', async (req, res) => {
    try {
        const vehicleResponse = await pool.query('SELECT * FROM vehicle_records');
        if (vehicleResponse.rows.length === 0) {
            return res.status(200).send('Vehicle Records Empty'); // For Future Use
        }
        return res.status(200).json(vehicleResponse.rows);
    } 
    catch (err) {
        console.error('Error Fetching Vehicles:', err);
        return res.status(500).send('Server Error');
    }
});
app.get('/api/vehicles/:id', async (req, res) => {
    try {
        const vehicleId = req.params.id;
        const vehicleResponse = await pool.query(
            'SELECT * FROM vehicle_records WHERE id = $1;',
            [vehicleId]
        );
        if (vehicleResponse.rows.length === 0) {
            return res.status(404).send('Vehicle Does Not Exist');
        }
        return res.status(200).json(vehicleResponse.rows[0]);
    }
    catch (err) {
        console.error('Error Fetching Vehicle:', err);
        return res.status(500).send('Server Error');
    }
});
app.post('/api/vehicles', async (req, res) => {
    try {
        const { name, registration } = req.body;
        if (!name || !registration) {
            return res.status(400).send('Missing Vehicle Name or Registration');
        }
        await pool.query(
            'INSERT INTO vehicle_records (name, registration) VALUES ($1, $2);',
            [name, registration]
        );
        return res.status(200).send('Added Vehicle Information');
    }
    catch (err) {
        console.error('Error Fetching Vehicle:', err);
        return res.status(500).send('Server Error');
    }
});
app.patch('/api/vehicles/:id', async (req, res) => {
    try {
        const vehicleId = req.params.id;
        const { attribute, updatedAttribute } = req.body;
        if (!attribute || !updatedAttribute) {
            return res.status(400).send('Missing Attribute or Updated Attribute');
        }
        await pool.query(
            `UPDATE vehicle_records SET ${attribute} = $1 WHERE id = $2;`,
            [updatedAttribute, vehicleId]
        );
        return res.status(200).send('Updated Vehicle Information');
    }
    catch (err) {
        console.error('Error Fetching Vehicle:', err);
        return res.status(500).send('Server Error');
    }
});
app.delete('/api/vehicles/:id', async (req, res) => {
    try {
        const vehicleId = req.params.id;
        if (!vehicleId) {
            res.status(400).send('Missing Vehicle ID');
        }
        await pool.query(
            'DELETE FROM vehicle_records WHERE id = $1;',
            [vehicleId]
        );
        return res.status(200).send('Vehicle Deleted Successfully');
    }
    catch (err) {
        console.error('Error Fetching Vehicle:', err);
        return res.status(500).send('Server Error');
    }
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});