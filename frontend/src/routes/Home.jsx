import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import CustomCard from '../components/cards/Card'
import NotifCard from '../components/cards/NotifCard'
import TimeCard from '../components/cards/TimeCard'

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8080/home')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  return (
    <div>
      <h1 className="home">Console Home</h1>
      <TimeCard className='time-card' date={data.date}/>
      <div className='dashboard'>
        <NotifCard/>
        <div className='spintex'>
          <h2>SPINTEX</h2>
          <div className='row'>
            <CustomCard name='Blank Card'/>
            <CustomCard name='Blank Card'/>
          </div>
        </div>
      </div>
      <div className='bus'>  
          <h2>TRANSPORT</h2>
          <div className='row'>
            <CustomCard name='Vehicle Record' subName='JKBS, COVAI' link='/home/vehicles'/>
            <CustomCard name='Collection Sheet' subName='JKBS'/>
            {/* <CustomCard name='Blank Card'/> */}
          </div>
      </div>
    </div>
  )
}

export default Home