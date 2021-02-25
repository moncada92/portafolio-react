import React, { useEffect, useState, Fragment } from 'react';
import { useHistory } from 'react-router-dom';

//styles
import styled from 'styled-components';
//API
import { MovieState } from '../API'; 

//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';


const MovieDetail = () => {

  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {

    const getMovie = movies.filter((stateMovie) => stateMovie.url === url );

    setMovie(getMovie[0]);
  }, [url, movies])

  return ( 
    <Fragment>
    { movie && 
      <Details
      variants={ pageAnimation }
      initial="hidden"
      animate="show"
      exit="exit"
      >
        <HeadLine>
          <h2>{ movie.title }</h2>
          <img src={movie.mainImg} alt="movie"/>
        </HeadLine>
        <Awards>
          {
            movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              /> 
            ))
          }
        </Awards>
        <ImageDisplay>
          <img src={movie.secondaryImg} alt="movie"/>
        </ImageDisplay>
      </Details>
    }
    </Fragment>
   );
}

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;

  h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%) 
  }

  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }

  @media (max-width: 700px){
    h2{
      width: 100%;
      text-align: center;
    }
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content:space-around;
  @media (max-width: 1200px){
    display: block;
    margin: 2rem;
    text-align: center;
  }
`;

const AwardStyle = styled.div`
  padding: 3rem 2.5rem;
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size:0.9rem;
    padding: 2rem 0rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.3rem;
    margin: 1rem 0rem; 
  }
  @media (max-width: 1200px){
    .line {
      margin: 1rem auto;
    }
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width:100%;
    height: 100%;
    object-fit: cover;
  }
`;

//Award Component

const Award = ({title, description}) => {
  return ( 
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
   );
}
 
 
export default MovieDetail;