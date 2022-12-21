import React from 'react'
import './hero.css';
import moonback from '../images/moon-back.png'
import moon from '../images/moon.png'
import moon1 from '../images/moon1.png'
import lines from '../images/lines.png'
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import LightSpeed from 'react-reveal/LightSpeed';
import cl1 from '../images/cl1.png'
import cl2 from '../images/cl2.png'
import cl3 from '../images/cl3.png'



const Hero = () => {
  return (
    <div className='divs'>
        <div className='divme' id='thing'>
          <Fade left delay={200} >
            <p className='portfolioom'>portfolio</p>
            <p className='name'>IRAKLI</p>
            <p className='surname'>BERIKASHVILI</p>
          </Fade>
          <LightSpeed left>
            <img className='linesone' src={lines}></img>
          </LightSpeed>
          <Fade left delay={200} >
            <p className='juniorweb'>Junior web /</p>
            <p className='frontend'>front-end, ReactJS developer</p>
          </Fade>
        </div>

        <div className='divmoon' id='thing'>
          <Fade right delay={200}>
          <p className='portfolioo'>PORTFOLIO</p>
          </Fade>
          <Fade right>
          <img className='moonback' src={moonback}></img>
          </Fade>
          <Fade right>
          <img className='moon1' src={moon1}></img>
          </Fade>

          <Fade right delay={500}>
          <img className='cl1' src={cl1}></img>
          </Fade>

          <Fade right delay={500}>
          <img className='cl2' src={cl2}></img>
          </Fade>

          <Fade right delay={500}>
          <img className='cl3' src={cl3}></img>
          </Fade>

        </div>
    </div>
  )
}

export default Hero