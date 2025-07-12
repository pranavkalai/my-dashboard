import React from 'react'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { useEffect, useState } from 'react'
import './Vehicles.css'


const Vehicles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/home/vehicles')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  const formatedData = data.map((vehicle_info, index) => (
      <tr key={vehicle_info.registration}>
        <td>{index + 1}</td>
        <td>{vehicle_info.name}</td>
        <td>{vehicle_info.registration}</td>
        <td>Blank</td>
        <td>Blank</td>
      </tr>
    )
  );

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
          {formatedData}
        </tbody>
      </Table>
      </div>
    </div>
  )
}

export default Vehicles