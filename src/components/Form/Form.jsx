import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { telegramOrder } from 'api/telegramApi';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';
import iconClose from '../../images/form/iconClose.svg';
import {
  StyledInput,
  StyledSelect,
  StyledFormBtn,
  StyledForm,
  StyledIconClose,
} from './Form.styled';

const Form = ({ closeModal }) => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' && setName(value);
    name === 'phone' && setPhone(Number(value));
    name === 'color' && setColor(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (color === '' || name === '' || phone === '') {
      Notify.failure('Заповніть, будь ласка, усі поля');

      return;
    }

    if (isNaN(phone)) {
      Notify.failure('Введіть, будь ласка, правильний номер');

      return;
    }

    let message = `Ім'я: ${name}\n`;
    message += `Телефон: ${phone}\n`;
    message += `Колір ${color}`;

    telegramOrder(message);

    navigate('/thanks');

    closeModal();
  };

  // const reset = () => {
  //   setColor('');
  //   setName('');
  //   setPhone('');
  // };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledSelect name="color" onChange={handleChange}>
        <option value="">Оберіть колір</option>
        <option value="Чорний">Чорний</option>
        <option value="Синій">Синій</option>
        <option value="Червоний">Червоний</option>
      </StyledSelect>
      <StyledInput
        type="text"
        name="name"
        placeholder="Ім'я"
        onChange={handleChange}
      />
      <StyledInput
        type="tel"
        name="phone"
        placeholder="Номер телефону"
        onChange={handleChange}
      />
      <StyledFormBtn type="submit">Замовити</StyledFormBtn>
      <StyledIconClose src={iconClose} alt="Icon Close" onClick={closeModal} />
    </StyledForm>
  );
};

export default Form;

Form.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
