import React from 'react'
import './project.css'
import EcommercePic from '../../assets/E-Commerce.png'
import admin from '../../assets/admin.jpg'
import socialmedia from "../../assets/fbmedia.png"
import htlbook from '../../assets/hotel-booking.png'
import quizapp from '../../assets/quizapp.png'

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
            <img className='proImg' src={EcommercePic} alt=''/>
            <div className='proText'>
                <h2>Digital E-Commerce</h2>
                <p>Technologies: JavaScript, React.js, Node js, React Icons, tailwind css, JWT Authentication.(Email: epukhan00@gmail.com, password: 123456)</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleDiaryGit("https://github.com/Iftekhar-Uddin/E-Commerce-Client.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleDiarySite("https://e-commerce-client-gtx6.onrender.com")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={socialmedia} alt=''/>
            <div className='proText'>
                <h2>Social Media</h2>
                <p>Technologies: JavaScript, React.js, Node js, CSS, Multer, Base64, and others. Example (Email: epukhan00@gmail.com, password: 123456)</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleSocialMediaGit("https://github.com/Iftekhar-Uddin/Social-Media-Client.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleSocialMediaSite("https://social-media-client-msw1.onrender.com")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={htlbook} alt=''/>
            <div className='proText'>
                <h2>Hotel Booking</h2>
                <p>Technologies: JavaScript, React.js, Node js, React Icons, and others. Example (Username: Epu Khan ET, password: 123456)</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleHotelBookingGit("https://github.com/Iftekhar-Uddin/Hotel-Booking-Client.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleHotelBookingSite("https://hotel-booking-client-2gel.onrender.com")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={admin} alt=''/>
            <div className='proText'>
                <h2>Admin Panel</h2>
                <p>Technologies: JavaScript, React.js, Node js, SASS, Cloudinary, and others. Example (Username: Epu Khan ET, password: 123456)</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleAdminPanelGit("https://github.com/Iftekhar-Uddin/Admin-Panel.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleAdminPanelSite("https://admin-panel-19s2.onrender.com")}>Live Site</button>
            </div>
        </div>
        <div className='projectsBar'>
            <img className='proImg' src={quizapp} alt=''/>
            <div className='proText'>
                <h2>Quiz application</h2>
                <p>Technologies: JavaScript, React.js, css and others</p>
            </div>
            <div className='probuttom'>
                <button className='buttonsare' onClick={()=> handleAdminPanelGit("https://github.com/Iftekhar-Uddin/Quiz-Application.git")}>Github Link</button>
                <button className='buttonsare' onClick={()=> handleAdminPanelSite("https://quiz-application-5c0r.onrender.com")}>Live Site</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Project