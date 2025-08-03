import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Update = () => {
  const { id, attribute } = useParams();
  const [updatedAttribute, setUpdatedAttribute] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/home/vehicles/${id}/update/${attribute}`, { updatedAttribute });
  }

  return (
    <div className='update'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control placeholder="Enter email" onChange={ (e) => {setUpdatedAttribute(e.target.value)} }/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
    </div>
  )
}

export default Update