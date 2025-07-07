import React, {use, useEffect, useState} from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './components/navbar/Navbar'
import LeftPillar from './components/left-pillar/LeftPillar'
import RightPillar from './components/right-pillar/RightPillar'
import CustomCard from './components/card/Card'


const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    axios.get('http://localhost:8080')
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
      })
  }, []);

  return (
    <div className='body'>
      <CustomNavbar />
      <LeftPillar />
      <RightPillar />
      <h1 className="home">Console Home</h1>
      <CustomCard brand={message.brand} year={message.year}/>
    </div>
  )
}

export default App