import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Add = () => {
    const [name, setName] = useState('');
    const [registration, setRegistration] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/api/vehicles', { name: name, registration: registration });
    }

    return (
        <div className='update'>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="vehicleName">
                <Form.Label>Vehicle Name</Form.Label>
                <Form.Control placeholder="Enter vehicle name" onChange={ (e) => {setName(e.target.value)} }/>
                <Form.Text className="text-muted">
                    Choose a unique name
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="vehicleRegistration">
                <Form.Label>Vehicle Registration</Form.Label>
                <Form.Control placeholder="Enter vehicle registration" onChange={ (e) => {setRegistration(e.target.value)} }/>
                <Form.Text className="text-muted">
                    Format: "TN 00 XX 0000"
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Add Vehicle
            </Button>
            <div className='back-link'>
                <Link to={'/home/vehicles'}>Back to Vehicles</Link>
            </div>
            </Form>
        </div>
    )
}

export default Add