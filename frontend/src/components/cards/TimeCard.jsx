import React from 'react'
import Card from 'react-bootstrap/Card';


const TimeCard = ({className, date}) => {
  return (
        <Card className={className}>
            <Card.Body>{date}</Card.Body>
        </Card>
    )
}

export default TimeCard