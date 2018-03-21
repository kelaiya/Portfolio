import React from 'react'
import {withRouter, Link} from 'react-router-dom'


const Main = (props) => {
  var skills = []
  return (
    <div>
      <h1 className="title">Kelaiya Parikh</h1>
      <nav className = "nav">
        <Link to="/home" className="link">Home</Link>
        <Link to="/projects" className="link1">  Projects / Skills</Link>
        <Link to="/contact" className="link">Contact Me</Link>
      </nav>
      <div className="content">
        <div>
          <img className="image" src="/IMG_2094.jpg" />
        </div>
        <h2 className="text slogan"> Motto of my life </h2>
        <p className="text"> The best preparation for tomorrow is doing your best today </p>
        <h2 className="text slogan"> About me... </h2>
        <p className="text"> I'm a former teacher who decided to change careers and learn web development. I have spent the better part of the last 2 years learning how to code and have passed certifications in Java. </p> 
        <p className="text">In May 2017, I took a big step toward my goals by enrolling into the Grace Hopper Program at Fullstack Academy, an coding academy exclusively for women. This place that changed my life. I learned cutting-edge technologies and now I am ready to apply these newfound skills to an engineering role.</p>
        <p className="text"> What I love about coding is being able create something tangible out of an idea, and along the way being constantly challenged and forced to think creatively for a solution. I am an extremely hard worker, who loves working in teams and learning new things. </p>
        <h2 className="text slogan"> I love to do... </h2>
        <p className="text"> Sing. I gave several stage shows singing Bollywood songs </p>
        <p className="text"> Explore the world. I recently went to Japan and rejuvenate in its endless beauty </p>
        <p className="text"> Ofcourse, to code. I love because it is a usable art. </p>
        <div className="logos">
          <a className="icon" href="mailto:kelaiyarao1@gmail.com" target="_blank">
            <img className="logo-img" src="/gmail.png" />
          </a>
          <a className="icon" href="https://www.linkedin.com/in/kelaiya-parikh" target="_blank">
            <img className="logo-img" src="/linkedin.png" />
          </a>
          <a className="icon" href="https://github.com/kelaiya" target="_blank">
            <img className="logo-img" src="/git.png" />
          </a>
        </div>
       </div>    
    </div>
  )
}


export default Main


