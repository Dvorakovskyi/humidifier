import React from 'react';
import mainPhoto from '../../images/hero/mainPhoto.png';
import { StyledMainTitle } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <StyledMainTitle>
        Термос ТермоТріо 500мл із датчиком температури
      </StyledMainTitle>
      <img src={mainPhoto} alt="Термос" width="480"/>
    </>
  );
};

export default Hero;
