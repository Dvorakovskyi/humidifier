import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledThkText,
  StyledThkSection,
  StyledThkTitle,
  StyledThkBtn,
} from './Thanks.styled';

const Thanks = () => {
  const navigate = useNavigate();

  return (
    <StyledThkSection>
      <StyledThkTitle>Дякуємо за замовлення!</StyledThkTitle>
      <StyledThkText>
        Найближчим часом наш менеджер зв'яжеться з Вами для підтвердження
        замовлення.
      </StyledThkText>
      <StyledThkBtn
        type="button"
        onClick={() => {
          navigate('/');
        }}
      >
        Повернутись назад
      </StyledThkBtn>
    </StyledThkSection>
  );
};

export default Thanks;
