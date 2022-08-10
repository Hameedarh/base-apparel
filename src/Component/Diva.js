import React from 'react'
import logo from '../Assets/logo.png'
import herodesktop from '../Assets/hero-desktop.jpg';
import heromobile from '../Assets/hero-mobile.jpg';
import './Diva.css';
// import error from '../Assets/icon-error.png';
import arrow from '../Assets/icon-arrow.png';

function Diva() {
  return (
    <div className='flex'>
        <div className='left'>
            <img src={logo} alt=""/>
            <img src={heromobile} alt='' height="600px" className='non'/>
            <h1 className='col'>WE'RE</h1>
            <h1>COMING</h1>
            <h1>SOON</h1>
            <p>Hello fellow shoppers! We are currently building our new fashion store. Add your email below to stay up-to-date with announcement and lauch deals</p>
            <div className='mid'>
                <input placeholder='Email Address'/>
                <button className='arrow'><img src={arrow} alt=""/> </button> 
            </div>
        </div>
        <div className='right'>
            <img src={herodesktop} alt='' height="600px" className='des'/>
        </div>
    </div>
  )
}

export default Diva
