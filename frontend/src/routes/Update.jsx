import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './Update.css';

const Update = () => {
  const { id, attribute } = useParams();
  const [updatedAttribute, setUpdatedAttribute] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:8080/api/vehicles/${id}`, { attribute: attribute, updatedAttribute: updatedAttribute });
  }

  return (
    <div className='update'>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="vehicleAttribute">
            <Form.Label>Vehicle {attribute}</Form.Label>
            <Form.Control placeholder={`Update vehicle ${attribute}`} onChange={ (e) => {setUpdatedAttribute(e.target.value)} }/>
            <Form.Text className="text-muted">
              {/* Placeholder text */}
            </Form.Text>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Update
          </Button>
          <div className='back-link'>
            <Link to={`/home/vehicles/${id}`}>Back</Link>
          </div>
        </Form>
    </div>
  )
}

export default Update