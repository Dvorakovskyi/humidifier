import React from 'react';
import img from '../../images/img/img.jpg';
import { StyledDescImg } from 'components/Description/Description.styled';

const Img = () => {
  return <StyledDescImg src={img} alt="Термос" />;
};

export default Img;
