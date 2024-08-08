import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import Education from './Components/Education/Education.jsx'
import Skills from './Components/Skills/Skills.jsx'
import Projects from './Components/Projects/Projects.jsx'
import Extracurricular from './Components/Extracurricular/Extracurricular.jsx'
// import Certifications from './Components/Certifications/Certifications.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='Education' element={<Education/>}/>
      <Route path='Skills' element={<Skills/>}/>
      <Route path='Projects' element={<Projects/>}/>
      <Route path='Extracurricular' element={<Extracurricular/>}/>
      {/* <Route path='Certifications' element={<Certifications/>}/> */}


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>,
)
