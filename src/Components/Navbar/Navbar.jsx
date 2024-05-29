import React from 'react'
import './navbar.css'
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='left'>
            <h2 className='h11'>Iftekhar Uddin</h2>
        </div>
        <div className='center'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='MenuItem'>About</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='MenuItem'>Skills</Link>
            <Link activeClass='active' to='project' spy={true} smooth={true} offset={-20} duration={500} className='MenuItem'>Projects</Link>
        </div>
        <div className='right'>
        <Link to='contact' spy={true} smooth={true} offset={-100} duration={500} className='MenuItem'><button className='desktopMenuButton'>Contact Me</button></Link>
        </div>
    </div>
  )
}

export default Navbar;