import React from 'react'
import "./about.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import spaceman from '../images/spaceman.png';
import lines from '../images/lines.png'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import saturn from '../images/saturn.png'


export function aboutme() {
   const abouttme = document.getElementById('aboutme')
   console.log(abouttme)
   return abouttme
}

const About = () => {

  return (

    <div className='aboutdiv'>
        <div className='abouttt'>
          <Fade left delay={200}>
            <p id='aboutme' className='aboutme' >About Me</p>
          </Fade>
          <LightSpeed left>
            <img className='linestwo' src={lines}></img>
          </LightSpeed>
          <Fade left delay={200}>
            <p className='lovecode'>I love coding //</p>
            <p className='buildweb'>Building websites</p>
          </Fade>
          <LightSpeed delay={1200}>
            <a className='aboutmore' target='_blank' href='/about'>
              <button className='aboutother'>learn more</button>
            </a>
          </LightSpeed>
        </div>
        <div className='image'>
            <img className='spaceman' src={spaceman}></img>
            <Fade right delay={1000}>
            <img className='saturn' src={saturn}></img>
            </Fade>
        </div>
    </div>
  )
}

export default About