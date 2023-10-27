import React from "react";
import { StyledSection } from "components/Description/Description.styled";
import { StyledSecTitle } from "components/Benefits/Benefits.styled";
import { StyledRemText } from "components/Remainder/Remainder.styled";
import { StyledThkText } from "./Thanks.styled";

const Thanks = () => {
    return (
        <StyledSection>
            <StyledSecTitle>Вітаємо!</StyledSecTitle>
            <StyledRemText>Ваше замовлення прийнято.</StyledRemText>
            <StyledThkText>Найближчим часом з Вами зв'яжеться менеджер для підтвердження замовлення.</StyledThkText>
        </StyledSection>
    )
}

export default Thanks;