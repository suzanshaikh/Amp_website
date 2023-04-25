import React from 'react';
import '../App.css';
import './HeroSection.css';
import {Button} from './Button';
import './Button.css'
function HeroSection() {
    return (
    <div className='hero-container'>
      <video src='videos/video-1.mp4' autoPlay loop muted />
      <h1>Wanted to list your Business ?</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Add your Business
        </Button>
      </div>
    </div>
  );
 
}

export default HeroSection;