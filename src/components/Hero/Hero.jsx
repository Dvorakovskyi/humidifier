import React from 'react';
import mainPhoto from '../../images/hero/mainPhoto.png';
import benefitsImg from '../../images/hero/benefits.jpg';
import { StyledMainTitle, StyledHeroImg } from './Hero.styled';

const Hero = () => {
  return (
    <>
      <StyledMainTitle>
        Термос TermoComfort 500мл із датчиком температури
      </StyledMainTitle>
      <StyledHeroImg src={mainPhoto} alt="Термос" />
      <StyledHeroImg src={benefitsImg} alt="Переваги" />
    </>
  );
};

export default Hero;
