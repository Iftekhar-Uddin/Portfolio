import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro/Intro'
import Skills from "../Skills/Skills"
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import './home.css'


const home = () => {
  return (
    <div>
        <Navbar/>
        <Intro/>
        <Skills/>
        <Project/>
        <Contact/>
    </div>
  )
}

export default home
