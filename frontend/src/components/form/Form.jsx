import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const CustomForm = ({type}) => {
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Vehicle Name</Form.Label>
        <Form.Control placeholder={`${type} Vehicle Name`} />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Registration</Form.Label>
        <Form.Control placeholder={`${type} Vehicle Name`} />
      </Form.Group>
      <Button variant="primary" type="submit">
        {type}
      </Button>
    </Form>
  )
}

export default CustomForm