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
            Купила чоловіку на подарунок. Термос гарно тримає тепло, до вечору
            чай залишився гарячим, тому рекомендую.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Ярослава Бабик</StyledThirdTitle>
          <StyledCityText>м.Шепетівка</StyledCityText>
          <StyledReviewsText>
            Брала для прогулянок з дитиною, дуже зручно, що показує реальну
            температуру і не протікає. Легкий і дизайн приємний. До речі, мене
            здивувало, що немає неприємного запаху як часто буває в термочашках.
          </StyledReviewsText>
        </StyledReviewsItem>
        <StyledReviewsItem>
          <StyledThirdTitle>Дмитро Литвинчук</StyledThirdTitle>
          <StyledCityText>м.Кривий Ріг</StyledCityText>
          <StyledReviewsText>
            Тримає температуру прекрасно, через 2 години - кип‘яток, через 4-5
            годин просто гарячий. Не протікає і влазить в підстаканник, дуже
            зручно що одразу бачиш температуру свого напою.
          </StyledReviewsText>
        </StyledReviewsItem>
      </StyledReviewsList>
    </StyledReviewsSection>
  );
};

export default Reviews;
