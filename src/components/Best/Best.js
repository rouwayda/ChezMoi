import React from 'react';
import './Best.css';
import apt from '../../assets/apt1.jpeg';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


const Best = () => {
  return(

    <div className='Container'>
      <div className='Arrowleft' >
          <ArrowLeftIcon/>
      </div>
      <div className='wrapper'>
        <div className='Slide'>
        <div className='imgCon'>
        <img  src={apt} className='image'/>
        </div>
        </div>
        <div className='imgInfo'>
          <h1>Location</h1>
            <p>Vous pouver louer votre appartement ou maison </p>
            
          
        </div>
      </div>
      <div className='Arrowright' >
          <ArrowRightIcon/>
      </div>
    </div>
  )
}

export default Best