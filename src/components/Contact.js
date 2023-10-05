import { React, useState } from 'react'
import '../Contact.scss'
import Header from './Header'
import { Link } from 'react-router-dom';
import {FaArrowRight} from 'react-icons/fa'


export const Contact = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className='contact-container'>

      <Header onClick={() => setModal(!modal)} visible={modal ? "visible" : "not-visible"} />
      <div className={`contact-infos ${modal && 'noise'}`}>
        <div className='contact-title'>
          <h1>Contact</h1>
        </div>
          <hr></hr>
        <div className='sides'>
          {/* changer la structure des "sides"  //////////////////*/}
          <div className='leftside'>
            <p>E-mail <a href='mailto:belghazi.fayssal.prof@gmail.com'><FaArrowRight/>belghazi.fayssal.prof@gmail.com</a></p>
          </div>
          <div className='rightside'>
            <p>Réseau  <a href='https://www.linkedin.com/in/fayssal-belghazi/' target="_blank" rel="noopener noreferrer"><FaArrowRight/>Linkedin</a></p>
          </div>

        </div>
      </div>
    </div>
  )
}
