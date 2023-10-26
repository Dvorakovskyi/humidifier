import React from 'react';
import {
  StyledReviewsSection,
  StyledReviewsItem,
  StyledThirdTitle,
  StyledCityText,
  StyledReviewsList,
  StyledRevSecTitle,
  StyledReviewsText,
} from './Reviews.styled';

const Reviews = () => {
  return (
    <StyledReviewsSection>
      <StyledRevSecTitle>Відгуки наших покупців</StyledRevSecTitle>
      <StyledReviewsList>
        <StyledReviewsItem>
          <StyledThirdTitle>Юлія Приходько</StyledThirdTitle>
          <StyledCityText>м.Київ</StyledCityText>
          <StyledReviewsText>
            Термос має стильний і сучасний дизайн. Його ергономічна форма добре
            лягає в руку, і він виглядає дуже елегантно. Я отримала безліч
            компліментів від колег і друзів, коли взяла його з собою на роботу.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Дмитро Василенко</StyledThirdTitle>
          <StyledCityText>м.Шепетівка</StyledCityText>
          <StyledReviewsText>
            Термос з сенсорним електронним таблом температури - це дійсно
            дивовижний винахід, який суттєво полегшує моє щоденне життя. Я
            завжди був прихильником високоякісних термосів, і ця модель мене
            дійсно вразила.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Ірина Різдвяна</StyledThirdTitle>
          <StyledCityText>м.Львів</StyledCityText>
          <StyledReviewsText>
            Важливо відзначити, що цей термос не обмежується лише гарячими
            напоями. Він також відмінно утримує прохолодні напої, і я часто
            використовую його для зберігання свіжого лимонаду чи льодяного чаю.
          </StyledReviewsText>
        </StyledReviewsItem>
      </StyledReviewsList>
    </StyledReviewsSection>
  );
};

export default Reviews;
