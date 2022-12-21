import React from 'react'
import './contact.css'
import lines from '../images/lines.png'
import halfmoon from '../images/halfmoon.png'
import rocket from '../images/rocket.png'
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import { LightSpeed } from 'react-reveal'
import { IoMail } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'


export function contactme() {
  const contactme = document.getElementById('togit')
  return contactme
}



const Contact = () => {
  return (
    <div className='contactdiv'>
        <div className='contact'>
            <Fade left delay={200}>
            <p className='touch'>Lets get in touch!</p>
            </Fade>
            <LightSpeed>
            <img className='linesthree' src={lines}></img>
            </LightSpeed>
            <Fade left delay={200}>
            <p className='mail'><IoMail size={40} className='iomail'></IoMail> iraklibusiness1@gmail.com</p>
            <p className='number'><FaPhoneAlt size={40} className='iophone'></FaPhoneAlt>+995 555 411 337</p>
            </Fade>

            
            <div className='socials'>
              
              <a target='_blank' href='https://www.facebook.com/irakli.berikashvili.581'>
              <Fade left delay={400}>
              <FaFacebook className='tofb' size={55}></FaFacebook>
              </Fade>
              </a>
              <a target='_blank' href='https://www.instagram.com/slatra1/'>
              <Fade left delay={600}>
              <FaInstagram className='toig' size={55}></FaInstagram>
              </Fade>
              </a>
              <a target="_blank" href='https://github.com/irakli182'>
              <Fade left delay={800}>
              <FaGithub id='togit' className='togit' size={55}></FaGithub>
              </Fade>
              </a>
            </div>
        </div>
        <div className='imgdiv'>
          <img className='halfmoon' src={halfmoon}></img>
          <img className='rocket' src={rocket}></img>
        </div>
    </div>
  )
}

export default Contact
