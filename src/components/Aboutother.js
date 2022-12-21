import React from 'react'
import './aboutother.css'
import line from '../images/line.png'
import tbilisi from '../images/tbilisi.jpg'
import book from '../images/book.png'
import idea from '../images/idea.png'
import cofe from '../images/cofe.png'
import ReactSkillbar, { SkillBar } from 'react-skillbars';
import Fade from 'react-reveal/Fade';
import { LightSpeed } from 'react-reveal'

const Aboutother = () => {


  const skill1 = [
    {
       type: '',
       level: 88,
       color: { 
          bar: "#39D22A",
          title: {background: '#1A7C10', text: "#fff"} 
       }
    }];

  const skill2 = [
    {
      type: '',
      level: 75,
      color: { 
         bar: "#D2CF2A",
         title: {background: '#9C9A1D', text: "#fff"} 
      }
   },
  ]

  const skill3 = [
    {
      type: '',
      level: 85,
      color: { 
         bar: "#3AC1EE",
         title: {background: '#166B87', text: "#fff"} 
      }
   },
  ]

  const skill4 = [
    {
      type: '',
      level: 81,
      color: { 
         bar: "#B447FF",
         title: {background: '#5F1B8E', text: "#fff"} 
      }
   },
  ]

  const skill5 = [
    {
      type: '',
      level: 90,
      color: { 
         bar: "#817FE3",
         title: {background: '#393775', text: "#fff"} 
      }
   },
  ]

  const skill6 = [
    {
      type: '',
      level: 95,
      color: { 
         bar: "#0700D0",
         title: {background: '#02002D', text: "#fff"} 
      }
   },
  ]


  return (
    <div>

      <div className='whoamidiv'>
        <div className='wwhoami'>
          <img className='line' src={line}></img>
          <p className='nulerti'>01</p>
          <Fade left>
          <p className='whoami'> WHO AM I</p>
          </Fade>
        </div>
        <div className='whoamitext'>
          <Fade right>
          <p className='paragraphme'>Irakli Berikashvili</p>
          <p className='bigtext'>My name is irakli, I am from Tbilisi, capital of Georgia. I was born on 31th of december, 2004 (which makes me 18 years old.)
          Ever since I was a kid I always found coding very fun and interesting, which got me into web development.
          <img className='tbilisi' src={tbilisi}></img>
          </p>
          </Fade>
        </div>
      </div>


      <div className='skilldiv'>

        <div className='passheader'>
            <img className='line2' src={line}></img>
            <p className='nulori'>02</p>
            <Fade left>
            <p className='skillset'>CHARACTERISTICS</p>
            </Fade>
        </div>
        
        <div className='skills'>
          <ul className='ul'>
            <li className='li1'>
              <Fade left delay={300}>
              <img className='book' src={book}></img>
              <p className='skill1h'>DEDICATION</p>
              <p className='skill1'>Even though I'm new in this field, I very much enjoy coding and am highly motivated to do any task. Must admit, as a junior developer, coding is a challenge for me, but im dedicated to overcome every difficulty.</p>
              </Fade>
            </li>
            <li className='li2'>
              <Fade left delay={500}>
              <img className='idea' src={idea}></img>
              <p className='skill2h'>RESPONSIBILITY</p>
              <p className='skill2'>My dad is an archaeologist. Since I was a little kid he always took me with him and tought me how to work. Archaelogoy and coding might not be related to each other, at all, but that working experience gave me a high sense of responsibility</p>
              </Fade>
            </li>
            <li className='li3'>
              <Fade left delay={700}>
              <img className='cofe' src={cofe}></img>
              <p className='skill3h'>TIME</p>
              <p className='skill3'>I am seventeen years old, which means I have all the time in the world. I've been practicing coding for last eight months and got a basic knowlege. I am willing to dedicate my time to coding and execute the tasks i'll be given.</p>
              </Fade>
            </li>
          </ul>
        </div>

      </div>


    <div className='powerdiv'>

      <div className='passheader1'>
            <img className='line3' src={line}></img>
            <p className='nulsami'>03</p>
            <p className='powers'>SKILLSET</p>
      </div>


      <div className='uls'>
        <div className='uldiv1'>
          <p>python</p>
          <SkillBar skills={skill1} height={60} />
          <p>Javascript</p>
          <SkillBar skills={skill2} height={60} />
          <p>ReactJS</p>
          <SkillBar skills={skill3} height={60} />
        </div>
        <div className='uldiv2'>
          <p>HTML / CSS</p>
          <SkillBar skills={skill4} height={60} />
          <p>Photoshop</p>
          <SkillBar skills={skill5} height={60} />
          <p>Github</p>
          <SkillBar skills={skill6} height={60} />
        </div>
      </div>


    </div>

    <div className='footer'>
      <p className='contact'>CONTACT ME</p>
      <p className='mail3'>iraklibusiness@gmail.com</p>
      <p className='phone'> +995 555 411 337</p>
    </div>


    </div>
  )
}

export default Aboutother