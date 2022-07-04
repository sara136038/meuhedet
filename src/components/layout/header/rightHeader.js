import React from "react";
import { Link } from "react-router-dom";
import {
  RightHeaderContainer,
  BurgerHold,
  Burger,
  SideBurgerLine,
  MiddleBurgerLine,
  LogoImg,
  Tel,
  TelNumber,
  TelImg,
  Star,
} from "./header.style";

const RightHeader = (props) => {
  return (
    <RightHeaderContainer>
      <BurgerHold>
        <Burger>
          <SideBurgerLine />
          <MiddleBurgerLine/>
          <SideBurgerLine />
        </Burger>
      </BurgerHold>

      <Link to="/">
        <LogoImg alt="logo" src={require("./assets/ico-logo.png")} />
      </Link>

      <Tel>
        <TelImg alt="tel" src={require("./assets/ico-phone.png")} />
        <TelNumber>3833</TelNumber>
        <Star>*</Star>
      </Tel>
    </RightHeaderContainer>
  );
};

export default RightHeader;
