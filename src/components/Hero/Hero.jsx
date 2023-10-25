import React from 'react';
import mainPhoto from '../../images/hero/mainPhoto.png';
import { StyledMainTitle, StyledHeroImg } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <StyledMainTitle>
        Термос ТермоТріо 500мл із датчиком температури
      </StyledMainTitle>
      <StyledHeroImg src={mainPhoto} alt="Термос"/>
    </>
  );
};

export default Hero;
