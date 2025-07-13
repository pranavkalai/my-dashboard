import React from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Form from '../form/Form'



const CustomTab = ({className}) => {
  return (
     <Tab.Container id="left-tabs-example" >
      <Row>
        <div className={className}>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="add">Add</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="update">Update</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="delete">Delete</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="add">
                <p>Complete the following fields:</p>
                <Form type='Add' />
              </Tab.Pane>
              <Tab.Pane eventKey="update">
                <p>Complete only the fields necessary:</p>
                <Form type='Update' />
              </Tab.Pane>
              <Tab.Pane eventKey="delete">third tab content</Tab.Pane>
            </Tab.Content>
          </Col>
        </div>
      </Row>
    </Tab.Container>
  )
}

export default CustomTab