import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import CustomCard from '../components/cards/Card'
import NotifCard from '../components/cards/NotifCard'
import TimeCard from '../components/cards/TimeCard'

const Home = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios.get('http://localhost:8080/api')
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error('Error Fetching Data:', err);
      })
  }, []);

  return (
    <div>
      <h1 className="home">Console Home</h1>
      <TimeCard className='time-card' date={data.date}/>
      <div className='bus'>  
          <div className='row'>
            <CustomCard name='Vehicle Record' subName='Jai Krishna Bus Service' link='/home/vehicles'/>
            {/* <CustomCard name='Employee Record' subName='Jai Krishna Bus Service' link='/home/employees'/> */}
          </div>
      </div>
    </div>
  )
}

export default Home