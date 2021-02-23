import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 
import { motion } from 'framer-motion';
import { useScroll } from './useScroll';
import {  fade, photoAnim, 
  lineAnim, movieContainer } from '../animation';

const MovieContent = ({athlete, theracer, goodtimes}) => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  return ( 
    <motion.div>
      <Movie
        ref={element3}
        variants={movieContainer}
        initial="hidden" 
        animate={controls3}>
      <motion.h2 variants={ fade }>The Athlete</motion.h2>
      <motion.div variants={ lineAnim  } className="line"></motion.div>
      <Link to="/work/the-athlete">
        <Hide>
          <motion.img variants={ photoAnim } src={athlete} alt="athlete"/>
        </Hide>
      </Link>
    </Movie>
    <Movie
      ref={element}
      transition={{ duration: 0.5 }}
      variants={movieContainer}
      animate={controls}
      initial="hidden" >
      <h2>The Racer</h2>
      <motion.div variants={ lineAnim  } className="line"></motion.div>
      <Link to="/work/the-racer">
        <img src={theracer} alt="te racer"/>
      </Link>
    </Movie>
    <Movie 
      ref={element2}
      variants={fade} 
      animate={controls2}
      initial="hidden"
      transition={{ duration: 0.5 }}>
      <h2>Good Times</h2>
      <motion.div variants={ lineAnim  } className="line"></motion.div>
      <Link to="/work/good-times">
        <img src={goodtimes} alt="good times"/>
      </Link>
    </Movie>
    </motion.div>
   );
}
 
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default MovieContent;