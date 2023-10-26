import React, { useState } from 'react';
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

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    name === 'name' && setName(value);
    name === 'phone' && setPhone(value);
    name === 'color' && setColor(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (color === '' || name === '' || phone === '') {
      Notify.failure('Заповніть, будь ласка, усі поля');

      return;
    }

    console.log({ color, name, phone });

    closeModal();

    reset();
  };

  const reset = () => {
    setColor('');
    setName('');
    setPhone('');
  };

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
