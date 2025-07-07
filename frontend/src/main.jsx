import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Account from './routes/Account.jsx'

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <App />,
    children: [
      { path: '', element: <Navigate to="/home" /> },  // redirect '/' to '/home'
      { path: 'home', element: <Home /> },
      { path: 'account', element: <Account /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

