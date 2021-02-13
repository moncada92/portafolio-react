import React from 'react';
import home1 from '../../img/home1.png'

const AboutSection = () => {
  return ( 
    <div>
      <div className="descriptio">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreamd</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
          <p>Contact us for any photography or videography ideas that you have. We have professionals with amizing skills</p>
          <button>Contact us</button>
        </div>
      </div>
      <div className="image">
        <img src={home1} alt="guy with a camer"/>
      </div>
    </div>
   );
}
 
export default AboutSection;