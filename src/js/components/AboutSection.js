import React from 'react';
import home1 from '../../img/home1.png'

//style components
import { About, Description, Hide, Image } from '../styles';

//framer Motion
import { motion } from 'framer-motion';


const AboutSection = () => {

  return ( 
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreamd</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
            come true.</motion.h2>
          </Hide>
        </motion.div>
        <p>Contact us for any photography or videography ideas that you have. We have professionals with amizing skills</p>
        <button>Contact us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camer"/>
      </Image>
    </About>
   );
}
 

export default AboutSection;