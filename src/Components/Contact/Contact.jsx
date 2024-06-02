import React, { useState, useRef } from 'react'
import "./contact.css"
import handshake from "../../assets/handshake1.png"
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const myref = useRef();
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    emailjs.sendForm('service_87je5ur', 'template_o6x16ig', myref.current, 'kmeBgAHZGysSsTBxY')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
      console.log(error.text);
    });
    // e.target.submit();
    e.target.reset();
  }

  setTimeout(() => {
    setMessage(false);
  }, [1500]);

  
  return (
    <div className='contact'>

      <div className='contacttop'>
        <img className='contactImg' src={handshake} alt=''/>
      </div>

      <div className='contactcenter'>
        <h1>Contact Me</h1>
        <form ref={myref} onSubmit={handleSubmit}>
        <input type='text' placeholder='Email' name='email_id'/>
        <textarea placeholder='Message' name='message'></textarea>
        <button type="submit" className='contactbutton'>Send</button>
        {message && <span style={{color:"green"}}>Thanks for your Message</span>}
        </form>
      </div>

      <div className='contactbottom'>
        <div className='iconforfooter'>
        <span ><FacebookIcon/></span>
        <span ><YouTubeIcon/></span>
        <span ><TwitterIcon/></span>
        <span ><LinkedInIcon/></span>
        </div>
        <p className='ptext'>Copyright &copy;Iftekhar Uddin @2023 All Rights Reserved.</p>
      </div>

    </div>
  )
}

export default Contact

