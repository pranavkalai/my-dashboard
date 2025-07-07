import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outlet } from 'react-router-dom'
import CustomNavbar from './components/navbar/Navbar'
import LeftPillar from './components/left-pillar/LeftPillar'
import RightPillar from './components/right-pillar/RightPillar'
import BottomBar from './components/bottom-bar/BottomBar'

const App = () => {
    return (
    <div className='body'>
      <CustomNavbar />
      <LeftPillar />
      <RightPillar />
      <main>
        <Outlet />
      </main>
      <BottomBar />
    </div>
  )
}

export default App