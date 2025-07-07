import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './components/navbar/Navbar'
import LeftPillar from './components/left-pillar/LeftPillar'
import RightPillar from './components/right-pillar/RightPillar'

const App = () => {
    return (
    <div className='body'>
      <CustomNavbar />
      <LeftPillar />
      <RightPillar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default App