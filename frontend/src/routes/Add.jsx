import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Add = () => {
    const [name, setName] = useState('');
    const [registration, setRegistration] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8080/home/vehicles', { name, registration });
    }

    return (
        <div className='update'>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Vehicle Name</Form.Label>
                <Form.Control placeholder="Enter vehicle name" onChange={ (e) => {setName(e.target.value)} }/>
                <Form.Text className="text-muted">
                Placeholder text
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Vehicle Registration</Form.Label>
                <Form.Control placeholder="Enter vehicle registration" onChange={ (e) => {setRegistration(e.target.value)} }/>
                <Form.Text className="text-muted">
                Placeholder text
                </Form.Text>
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Add