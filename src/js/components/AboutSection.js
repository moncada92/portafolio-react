import React from 'react';
import home1 from '../../img/home1.png'

//style components
import { About, Description, Hide, Image } from '../styles';

const AboutSection = () => {
  return ( 
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreamd</span>
            </h2>
          </Hide>
          <Hide>
            <h2>come true.</h2>
          </Hide>
          <p>Contact us for any photography or videography ideas that you have. We have professionals with amizing skills</p>
          <button>Contact us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camer"/>
      </Image>
    </About>
   );
}
 

export default AboutSection;