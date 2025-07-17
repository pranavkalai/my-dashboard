import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './Vehicles.css';

const Vehicle = () => {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState('');
  useEffect(() => {
    axios.get(`http://localhost:8080/home/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, [id]);

  return (
    <div className = 'test' >
      <div className = 'test1'>
        <p>{vehicle.name}</p>
        <Link to={`/home/vehicles/${id}/update/name`}>Edit</Link>
      </div>
      <div className='test1'>
        <p>{vehicle.registration}</p>
        <Link to={`/home/vehicles/${id}/update/registration`}>Edit</Link>
      </div>
    </div>
  )
}

export default Vehicle