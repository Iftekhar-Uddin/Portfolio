import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <section id="skills">
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I am a skilled and passionate web designer with experience in web developing. I have strong understanding of web design 
        and also have mobile responsive design knowledge. I am proficient in HTML, CSS, and Javascript. I also love to solve tricky problem.I give due 
        importance to my work and it is also my strength.
      </span>
      <div className='skillsBars'>

        <div className='skillbar'>
          <img className='skillImg' src='https://www.beyondmart.com/blog/wp-content/uploads/2020/05/web-design-rajkot.png' alt=''/>
          <div className='skillbarText'>
            <h2>Website Design</h2>
            <p>User convenient responsive web designing experience with, JavaScript, React.js, HTML, CSS, SASS,
              Material UI, Node js, GraphQL, MySql, etc.
            </p>
          </div>
        </div>

        <div className='skillbar'>
          <img className='skillImg' src='https://www.codingdojo.com/blog/wp-content/uploads/Top-Programming-Languages-of-2023.jpg.webp' alt=''/>
          <div className='skillbarText'>
            <h2>Programming</h2>
            <p>Problem solving skill at JavaScript. Maintain time management and professional with REST_API, MongoDB, Git, etc. Also know programming
             language C, C++, javaScript, etc. 
            </p>
          </div>
        </div>

        <div className='skillbar'>
          <img className='skillImg' src='https://media.gcflearnfree.org/content/55e0730c7dd48174331f5164_01_17_2014/whatisacomputer_pc.jpg' alt=''/>
          <div className='skillbarText'>
            <h2>Miscellaneous</h2>
            <p>Working experience with Microsoft office word, excel, photoshop, google sheets, docs, etc. Also learning and 
              practising php & python.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
