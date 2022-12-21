import React from 'react'
import "./header.css"
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Hero from "../components/Hero";
import About from './About';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from './Contact';
import { aboutme } from './About';
import { contactme } from './Contact';


const Header = () => {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  const handleClickScroll0 = () => {
    const element = document.getElementById('home');
    if (element) {
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
  };

  const handleClickScroll1 = () => {
    const element = document.getElementById('about')
    if (element) {
      aboutme().scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickScroll2 = () => {
    const element = document.getElementById('contact')
    if (element) {
      contactme().scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Fade top>
      <div className='header'>
        <div className='divportfolio'>
          <p className='portfolio' >portfolio</p>
        </div>

        <div className='navvbar'> 
            <ul className={click ? "navbar active" : "navbar"}>
              <li id='home' className='home' onClick={handleClickScroll0}>HOME</li>
              <li id='about' className='.about' onClick={handleClickScroll1}>ABOUT</li>
              <li id='contact' className='contact' onClick={handleClickScroll2}>CONTACT</li>
            </ul>
        </div>
        <div onClick = {handleClick}>
          {click ? (<FaTimes className='icons' size={35} style={{ color: "#fff"}} />) : (<FaBars className='icons' size={35} style={{ color: "#fff"}} />)}
        </div>
        
      </div>
      </Fade>
      <div className='hero'>
        <Hero />
      </div>
      <div className='about'>
        <About />
      </div>
      <div className='contact'>
        <Contact />
      </div>
    </div>
  )
}

export default Header