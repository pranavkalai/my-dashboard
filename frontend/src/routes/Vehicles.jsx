import React from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Vehicles.css'


const Vehicles = () => {
  const [message, setMessage] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/home/vehicles')
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  return (
    <div>
    <h1 className="home">Vehicles</h1>
      <div className='vehicles'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Registration</th>
            <th>Last Service Date</th>
            <th>Next Service Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{message.name}</td>
            <td>{message.registration}</td>
            <td>@mdo</td>
            <td>2023-10-01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
      </div>
    </div>
  )
}

export default Vehicles