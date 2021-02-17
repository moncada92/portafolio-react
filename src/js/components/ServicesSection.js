import React from 'react';
import clock from '../../img/clock.svg';
import diaphragm from '../../img/diaphragm.svg';
import money from '../../img/money.svg';
import teamwork from '../../img/teamwork.svg';
import home2 from '../../img/home2.png';

//style components
import styled from 'styled-components';
import { About, Description, Hide, Image } from '../styles';

const ServicesSection = () => {
  return ( 
    <Services>
      <Description>
        <h2>High <span>quality</span> services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} />
                <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} />
                <h3>Teamwork</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} />
                <h3>Diaphragm</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} />
                <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} />
      </Image>
    </Services>
   );
}
 
const Services = styled(About)`

  h2 {
    padding-top: 2rem;
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card  = styled.div`
  flex-basis: 13rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;