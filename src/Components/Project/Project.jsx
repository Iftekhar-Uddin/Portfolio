import React from 'react'
import './project.css'
import diarypic from '../../assets/events.jpg'
import admin from '../../assets/admin.jpg'
import socialmedia from "../../assets/socialmedia.jpg"
import htlbook from '../../assets/Hotelbooking.jpg'

const Project = () => {

    const handleDiaryGit = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }

    const handleDiarySite = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }
    const handleSocialMediaGit = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }

    const handleSocialMediaSite = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }
    const handleHotelBookingGit = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }

    const handleHotelBookingSite = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }
    const handleAdminPanelGit = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }

    const handleAdminPanelSite = (url) => {
        window.open(url, '_blank', 'noopener, noreferrer' )
    }

  return (
    <div className='project'>
      <div className='title'>
        <h2>My Works</h2>
      </div>
      <div className='projects'>
        <div className='projectsBar'>
            <img className='proImg' src={diarypic} alt=''/>
            <div className='proText'>
                <h2>Life Events</h2>
                <p>Technologies: JavaScript, React.js, Node js, Material UI, JWT Authentication</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleDiaryGit("https://github.com/Iftekhar-Uddin/Life-Events.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleDiarySite("https://lifediary.netlify.app/")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={socialmedia} alt=''/>
            <div className='proText'>
                <h2>Social Media</h2>
                <p>Technologies: JavaScript, React.js, Node js, CSS, Multer, Base64, Material UI and others.</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleSocialMediaGit("https://github.com/Iftekhar-Uddin/1.Social-Media.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleSocialMediaSite("https://socialmymedia.netlify.app/")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={htlbook} alt=''/>
            <div className='proText'>
                <h2>Hotel Booking</h2>
                <p>Technologies: JavaScript, React.js, Node js, React Icons, Material UI and others</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleHotelBookingGit("https://github.com/Iftekhar-Uddin/2.Hotel-Booking.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleHotelBookingSite("https://bookingofhotel.netlify.app/")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={admin} alt=''/>
            <div className='proText'>
                <h2>Admin Panel</h2>
                <p>Technologies: JavaScript, React.js, Node js, SASS, Cloudinary, Material UI and others</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleAdminPanelGit("https://github.com/Iftekhar-Uddin/3.Admin-Panel.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleAdminPanelSite("https://hoteladminpanel.netlify.app/")}>Live Site</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project
