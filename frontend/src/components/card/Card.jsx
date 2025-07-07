import React from 'react'
import Card from 'react-bootstrap/Card'

const CustomCard = ({ brand, year }) => {
  return (
    <Card style={{ width: '18rem' }} className='test'>
      <Card.Body>
        <Card.Title>Utilities Report</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">January 2025</Card.Subtitle>
        <Card.Text>
          Electricity: { brand }<br />
          Water: { year }
        </Card.Text>
        <Card.Link href="#">View</Card.Link>
        <Card.Link href="#">Download Metrics</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default CustomCard