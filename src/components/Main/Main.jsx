import React, { useState } from 'react';
import Hero from 'components/Hero/Hero';
import Price from 'components/Price/Price';
import Description from 'components/Description/Description';
import Timer from 'components/Timer/Timer';
import Button from 'components/Button/Button';
import Remainder from 'components/Remainder/Remainder';
import Modal from 'components/Modal/Modal';
import SecondDescription from 'components/SecondDescription/SecondDescription';
import Benefits from 'components/Benefits/Benefits';
import Img from 'components/Img/Img';
import { StyledMain } from './Main.styled';

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);

    document.body.classList.add('no-scroll');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);

    document.body.classList.remove('no-scroll');
  };

  return (
    <StyledMain>
      <Hero />
      <Price />
      <Description />
      <Timer />
      <Button openModal={handleOpenModal} />
      {isModalOpen && <Modal closeModal={handleCloseModal} />}
      <Remainder />
      <SecondDescription />
      <Benefits />
      <Img />
    </StyledMain>
  );
};

export default Main;
