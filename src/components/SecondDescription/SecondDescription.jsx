import React from 'react';
import img from '../../images/description/secDesc.jpg';
import {
  StyledSection,
  StyledDescImg,
  StyledDescText,
} from '../Description/Description.styled';

const SecondDescription = () => {
  return (
    <StyledSection>
      <StyledDescImg src={img} alt="Термос" />
      <StyledDescText>
        Термос стане у нагоді і мамам, і малюкам. Він не тільки
        збереже тепло, а й покаже точну температуру рідини. Тому ви можете
        сміливо готувати суміш малюкам і брати з собою на прогулянку.
      </StyledDescText>
    </StyledSection>
  );
};

export default SecondDescription;