import React from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'


const Main = (props) => {
  return (
    <div>
      <h1>Kelaiya Parikh</h1>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact Me</Link>
      </nav>
      <div>
        <h3> I'm a former teacher who decided to change careers and learn web development. I have spent the better part of the last 2 years learning how to code and have passed certifications in Java (OJCA and OJCP for SE 7). I am also proficient in Ruby and am ranked in the top 70 worldwide on Coderbyte.com. What I love about coding is being able create something tangible out of an idea, and along the way being constantly challenged and forced to think creatively for a solution. I am extremely hard worker, who loves working in teams and learning new things.</h3> 
        <h3>In May 2017, I entered Grace Hopper Program by Fullstack academy, a 17-week all women coding bootcamp with an acceptance rate of less than 8%. I am looking to apply these newfound skills to an engineering role.</h3>
      </div>
    </div>
  )
}


export default Main


