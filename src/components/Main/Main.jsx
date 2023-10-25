import React from "react";
import Hero from "components/Hero/Hero";
import Price from "components/Price/Price";
import { StyledMain } from "./Main.styled";

const Main = () => {
    return (
        <StyledMain>
            <Hero />
            <Price/>
        </StyledMain>
    )
}

export default Main;