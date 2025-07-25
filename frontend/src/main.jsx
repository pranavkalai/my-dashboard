import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Vehicles from './routes/Vehicles.jsx'
import Vehicle from './routes/Vehicle.jsx'
import Update from './routes/Update.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { path: '', element: <Navigate to="/home" /> },  // redirect '/' to '/home'
      { path: 'home', element: <Home /> },
      { path: 'home/vehicles', element: <Vehicles /> },
      { path: 'home/vehicles/:id', element: <Vehicle /> },
      { path: 'home/vehicles/:id/update/:element', element: <Update /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

