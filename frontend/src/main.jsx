import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Account from './routes/Account.jsx'
import Vehicles from './routes/Vehicles.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { path: '', element: <Navigate to="/home" /> },  // redirect '/' to '/home'
      { path: 'home', element: <Home /> },
      { path: 'account', element: <Account /> },
      { path: 'home/vehicles', element: <Vehicles /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

