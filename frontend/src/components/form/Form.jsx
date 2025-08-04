import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

const CustomForm = ({ type }) => {
  const [vehicleName, setVehicleName] = useState('');
  const [registration, setRegistration] = useState('');
  const [response, setResponse] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`http://localhost:8080/api/vehicles/${type}`, { vehicleName, registration });
    setResponse(response.data);
  };

  return (
    <div>
      <Form onSubmit={ handleSubmit }>
        <Form.Group className="mb-3">
          <Form.Label>Vehicle Name</Form.Label>
          <Form.Control placeholder={`${type} Vehicle Name`} onChange={ (e) => {setVehicleName(e.target.value)} }/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Registration</Form.Label>
          <Form.Control placeholder={`${type} Registration`} onChange={ (e) => {setRegistration(e.target.value)} }/>
        </Form.Group>
        <Button variant="primary" type="submit">
          {type}
        </Button>
      </Form>
      <p>{response}</p>
    </div>
    
  )
}

export default CustomForm