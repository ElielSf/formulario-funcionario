import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import EmployeeForm from './components/Employee/EmployeeForm.jsx'
import PersonForm from './components/Person/PersonForm.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './css/index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <PersonForm />
      },
      {
        path: '/funcionario',
        element: <EmployeeForm />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)