import React from "react";
import Hero from "components/Hero/Hero";
import Price from "components/Price/Price";
import Description from "components/Description/Description";
import Timer from "components/Timer/Timer";
import { StyledMain } from "./Main.styled";

const Main = () => {
    return (
        <StyledMain>
            <Hero />
            <Price />
            <Description />
            <Timer/>
        </StyledMain>
    )
}

export default Main;