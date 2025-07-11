import React from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

const CustomCard = ({ brand, year, className, link, name, subName, param1, param2}) => {
  return (
    <Card style={{ width: '18rem' }} className={className}>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{subName}</Card.Subtitle>
        <Card.Text>
          {param1}: { brand }<br />
          {param2}: { year }
        </Card.Text>
        <Card.Link as={Link} to={link}>View</Card.Link>
        {/* <Card.Link href="#">Download Metrics</Card.Link> */}
      </Card.Body>
    </Card>
  )
}

export default CustomCard