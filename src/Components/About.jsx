import React, {useState} from 'react'
import img from '../images/about.png'

function About() {
    return (
      <div id='about'>
       <div className='about-img'>
        <img src={img}></img>
       </div>
       <div className='about-text'>
        <h1>LEARN MORE ABOUT US</h1>
        <p>text text text text text text text text text text text text text  </p>
        <button>READ MORE</button>
       </div>
      </div>
    );
  }
  
  export default About;