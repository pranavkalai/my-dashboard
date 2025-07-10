import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CustomCard from '../components/cards/Card'
import NotifCard from '../components/cards/NotifCard'
import TimeCard from '../components/cards/TimeCard'

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
      <TimeCard className='time-card' date={message.date}/>
      <div className='dashboard'>
        <NotifCard/>
        <div className='spintex'>
          <h2>SPINTEX</h2>
          <div className='row'>
            <CustomCard brand={message.brand} year={message.year}/>
            <CustomCard brand={message.brand} year={message.year}/>
          </div>
        </div>
      </div>
      <div className='bus'>  
          <h2 style={{}}>JKBS</h2>
          <div className='row'>
            <CustomCard brand={message.brand} year={message.year}/>
            <CustomCard brand={message.brand} year={message.year}/>
            <CustomCard brand={message.brand} year={message.year}/>
          </div>
      </div>
    </div>
  )
}

export default Home