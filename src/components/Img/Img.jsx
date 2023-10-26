import React from 'react';
import img from '../../images/img/img.jpg';
import img2 from '../../images/img/img2.png';
import { StyledDescImg } from 'components/Description/Description.styled';

const Img = () => {
  return (
    <>
      <StyledDescImg src={img} alt="Термос" />
      <StyledDescImg src={img2} alt="Термос" />
    </>
  );
};

export default Img;
