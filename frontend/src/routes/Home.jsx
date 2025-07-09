import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomCard from '../components/cards/Card'
import NotifCard from '../components/cards/NotifCard'

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
      <div className='dashboard'>
        <NotifCard/>
        <CustomCard brand={message.brand} year={message.year}/>
        <CustomCard brand={message.brand} year={message.year}/>
      </div>
    </div>
  )
}

export default Home