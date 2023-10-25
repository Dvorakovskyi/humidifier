import React from 'react';
import {
  StyledWrapper,
  StyledOldPrice,
  StyledNewPrice,
  StyledPriceText,
  StyledDiscount,
  StyledPrice,
  StyledPriceLine,
  StyledDiscText,
  StyledDiscNumber,
} from './Price.styled';

const Price = () => {
  return (
    <StyledWrapper>
      <StyledOldPrice>
        <StyledPriceText>Звичайна ціна:</StyledPriceText>
        <StyledPriceLine>699грн.</StyledPriceLine>
      </StyledOldPrice>
      <StyledDiscount>
        <StyledDiscText>SALE</StyledDiscText>
        <StyledDiscNumber>-29%</StyledDiscNumber>
      </StyledDiscount>
      <StyledNewPrice>
        <StyledPriceText>Ціна сьогодні:</StyledPriceText>
        <StyledPrice>499грн.</StyledPrice>
      </StyledNewPrice>
    </StyledWrapper>
  );
};

export default Price;
