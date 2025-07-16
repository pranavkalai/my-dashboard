import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Tab from '../components/tab/Tab';
import Table from 'react-bootstrap/Table';
import './Vehicles.css';


const Vehicles = () => {
  const [data, setData] = useState([]); // data from backend when page loads
  useEffect(() => {
    axios.get('http://localhost:8080/home/vehicles')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  const formatedData = data.map((vehicle_info, index) => ( // function formats data into table
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{vehicle_info.name}</td>
        <td>{vehicle_info.registration}</td>
        <td>Blank</td>
        <td>Blank</td>
        <td><Link to={`/home/vehicles/view/id=${index}`}>View</Link></td> 
      </tr>
    )
  );

  return (
    <div>
      <h1 className="home">Vehicle Record</h1>
      <div className='vehicle-record'>
        <div className='vehicles'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Registration</th>
                <th>Last Service Date</th>
                <th>Next Service Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {formatedData}
            </tbody>
          </Table>
        </div>
        <div className="custom-form">
          <Tab className='row'/>
        </div> 
      </div>
    </div>
  )
}

export default Vehicles