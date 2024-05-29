import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'
import imgg from '../../assets/imgg.png'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import {Cursor, useTypewriter} from "react-simple-typewriter";


const Intro = () => {

  const [text] = useTypewriter({
    words: ['Web developer', 'Web designer', 'Programmer'], 
    loop: {}, 
    typeSpeed: 100,
    deleteSpeed: 60,
  })

  return (

      <section id="intro">
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'> I'm <span className='introName'>Epu</span></span>
            <span className='runtext' style={{color: "tomato"}}>{text}<Cursor/></span>
            <p className='introParagrapg'> I am skilled web designer and developer with experience <br className='break'/>in creating visually appealing and making user friendly websites.</p>
            <Link><button className='introbtn'><BusinessCenterIcon className='icon'/>Hire Me</button></Link>
        </div>
        <img className='introImg' src={imgg} alt=''/>
      </section>

  )
}

export default Intro
