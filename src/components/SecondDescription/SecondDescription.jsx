import React from 'react';
import img from '../../images/description/secDesc.jpg';
import carImg from '../../images/description/car.jpg';
import redTer from '../../images/description/red.jpg';
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
        Термос стане у нагоді і мамам, і малюкам. Він не тільки збереже тепло, а
        й покаже точну температуру рідини. Тому ви можете сміливо готувати суміш
        малюкам і брати з собою на прогулянку.
      </StyledDescText>
      <StyledDescImg src={carImg} alt="Термос" />
      <StyledDescText>
        Термос відмінно поміщається у підсклянник автомобіля.
      </StyledDescText>
      <StyledDescImg src={redTer} alt="Термос" />
    </StyledSection>
  );
};

export default SecondDescription;
