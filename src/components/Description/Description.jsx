import React from 'react';
import description from '../../images/description/desc.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
} from './Description.styled';

const Description = () => {
  return (
    <StyledSection>
      <StyledDescImg src={description} alt="Термос" />
      <StyledDescText>
        Термос, який не тільки збереже тепло напою, але й покаже на дисплеї
        температуру рідини. Такий подарунок стане в нагоді в кожному будинку, в
        поїздці або в офісі.
      </StyledDescText>
    </StyledSection>
  );
};

export default Description;
