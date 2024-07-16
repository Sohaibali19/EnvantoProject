import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements,  } from 'react-router-dom'
import Layout from '../src/Layout.jsx'
import {Route} from 'react-router-dom'
import TopHeader from './components/Header/TopHeader.jsx'
import Home from './components/Home/Home.jsx'
import Jobs from './components/Jobs/Jobs.jsx'
import Pages from './components/Pages/Pages.jsx'
import Contact from './components/Contact/Contact.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path="/buynow" element={<TopHeader />} />
      <Route path="/home" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/pages" element={<Pages />} />
      <Route path="/contact" element={<Contact />} />

       


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
