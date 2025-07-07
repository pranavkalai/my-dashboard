import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomCard from '../components/card/Card'

const Home = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8080/home')
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  return (
    <div>
      <h1 className="home">Console Home</h1>
      <CustomCard brand={message.brand} year={message.year} className='test'/>
      <CustomCard brand={message.brand} year={message.year} className='copy'/>
    </div>
  )
}

export default Home