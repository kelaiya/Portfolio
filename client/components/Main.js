import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'


const Main = (props) => {
  return (
    <div>
      <h1 className="title">Kelaiya Parikh</h1>
      <nav className = "nav">
        <Link to="/home" className="link">Home</Link>
        <Link to="/projects" className="link">Projects</Link>
        <Link to="/contact" className="link">Contact Me</Link>
      </nav>
      <div className="content">
        <div>
          <img className="image" src="/stock-footage-old-man.jpg" alt="Flowers in Chania" />
        </div>
        <h3> <u> Motto in my life </u> </h3>
        
        <p className="slogan"> The best preparation for tomorrow is doing your best today </p>
        <p className="text"> I'm a former teacher who decided to change careers and learn web development. I have spent the better part of the last 2 years learning how to code and have passed certifications in Java. </p> 
        <p className="text">In May 2017, I entered my dreamland the Grace Hopper Program by Fullstack Academy. It is an all women coding bootcamp. This is a place that changed my life. I learned all the cutting-edge technologies and now I am ready to apply these newfound skills to an engineering role.</p>
        <p className="text"> What I love about coding is being able create something tangible out of an idea, and along the way being constantly challenged and forced to think creatively for a solution. I am extremely hard worker, who loves working in teams and learning new things. </p>
        
        
      </div>    
    </div>
  )
}


export default Main


