import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

const CustomForm = ({type}) => {
  const [vehicleName, setVehicleName] = useState('');
  const [registration, setRegistration] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/home/vehicles/add', { vehicleName, registration });    
  }; 

  return (
    <Form onSubmit={handleSubmit}>
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
  )
}

export default CustomForm