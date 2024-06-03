import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider, User } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import UserRole from './Pages/UserRole/UserRole.jsx';
import HomePage from './Pages/HomePage/HomePage.jsx';
import PatientDetailsForm from './Pages/UserDetailsForm/PatientDetailsForm/PatientDetailsForm.jsx';
import DoctorDetailsForm from './Pages/UserDetailsForm/DoctorDetailsForm/DoctorDetailsForm.jsx';
import PatientDashbords from './Pages/Dashboards/PatientDashboards/PatientDashbords.jsx';
import DoctorDashbords from './Pages/Dashboards/DoctorDashboards/DoctorDashbords.jsx';
import Experiments from './Pages/Experiments/Experiments.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "/UserRole",
    element: <UserRole/>
  },
  {
    path: "/PatientDetailsForm",
    element: <PatientDetailsForm/>
  },
  {
    path: "/DoctorDetailsForm",
    element: <DoctorDetailsForm/>
  },
  {
    path: "/PatientDashboard",
    element: <PatientDashbords/>
  },
  {
    path: "/DoctorDashboard",
    element: <DoctorDashbords/>
  },
  {
    path: "/Experiments",
    element: <Experiments/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-23uim5q552g75yiz.us.auth0.com"
    clientId="hgCIqMEeKT9YDH4DWhCswuW1UKwf3UpD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <App />
    <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>,
)
