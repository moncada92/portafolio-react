import React from 'react';
import styled from 'styled-components';  
import MovieContent from '../components/MovieContent';
import Frames from '../components/Frames';
//Images
import athlete from "../../img/athlete-small.png";
import theracer from "../../img/theracer-small.png";
import goodtimes from "../../img/goodtimes-small.png";

//animations
import { motion } from 'framer-motion';


import { pageAnimation } from '../animation';


const OutWork = () => {

  return ( 
    <Work
    style={ { background: "#fff"} }
    variants={ pageAnimation }
    initial="hidden"
    animate="show"
    exit="exit"
    >
      <Frames />
      <MovieContent goodtimes={goodtimes} athlete={athlete} theracer={theracer}/>
    </Work>
   );
}

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2{
    padding: 1rem 0rem;
  }
`;
 

export default OutWork;