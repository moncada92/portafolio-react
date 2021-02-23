import React from 'react';
import styled from 'styled-components';
import { About } from "../styles";
import FaqToogle from './FaqToogle';
import { AnimateSharedLayout } from 'framer-motion';
import { scrollReveal } from '../animation';
import { useScroll } from './useScroll';

const FaqSection = () => {

  const [element, controls] = useScroll();

  return ( 
    <Faq  variants={scrollReveal} ref={element} animate={controls} initial="hidden" >
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
        <FaqToogle title="How do I start">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque.
              </p>
            </div>
        </FaqToogle>
        <FaqToogle title="Daily Schedule">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque.
              </p>
            </div>
        </FaqToogle>
        <FaqToogle title="Diferent Payment Methods">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque.
              </p>
            </div>
        </FaqToogle>
        <FaqToogle title="What Products do you offer.">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam itaque quaerat maxime rem facere neque.
              </p>
            </div>
        </FaqToogle>
      </AnimateSharedLayout>
    </Faq>
   );
}

const Faq = styled(About)`
  display: block;
  span {
    display: block
  }
  h2{
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line{
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding:2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
 
export default FaqSection;