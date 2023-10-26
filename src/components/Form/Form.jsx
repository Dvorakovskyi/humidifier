import React, { useState } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  StyledInput,
  StyledSelect,
  StyledFormBtn,
  StyledForm,
} from './Form.styled';

const Form = () => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    setColor(event.currentTarget.value);

    name === 'name' && setName(value);
    name === 'phone' && setPhone(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();

    if (color === '' || name === '' || phone === '') {
      Notify.failure('Заповніть, будь ласка, усі поля');

      return;
    }

    console.log({ color, name, phone });

    reset();
  };

  const reset = () => {
    setColor('');
    setName('');
    setPhone('');
  };

  return (
    <StyledForm onSubmit={handleSubmitForm}>
      <StyledSelect onChange={handleChange}>
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
    </StyledForm>
  );
};

export default Form;
