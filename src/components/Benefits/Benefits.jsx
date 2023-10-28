import React from 'react';
import { StyledSection } from 'components/Description/Description.styled';
import { StyledSecTitle, StyledItem } from './Benefits.styled';

const Benefits = () => {
  return (
    <StyledSection>
      <StyledSecTitle>Особливості</StyledSecTitle>
      <ul>
        <StyledItem>Підтримує температуру напоїв до 12 годин</StyledItem>
        <StyledItem>
          Ідеально підходить для зберігання чаю, кави, соку, води
        </StyledItem>
        <StyledItem>
          На кришці знаходиться вбудований рідкокристалічний екран, на якому
          відображається температура напою
        </StyledItem>
        <StyledItem>
          Усередині термокухля з РК дисплеєм знаходиться ситечко, що дуже зручно
          при заварці чаю
        </StyledItem>
        <StyledItem>
          Пляшка виготовлена з нержавіючої сталі із вставками із пластику ABS та
          харчового силікону
        </StyledItem>
        <StyledItem>Матеріали виробу стійкі до корозії та окислення</StyledItem>
        <StyledItem>Має клас захисту IPX7</StyledItem>
      </ul>
    </StyledSection>
  );
};

export default Benefits;
