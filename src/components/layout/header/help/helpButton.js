import React from "react";

import { HelpBtn, BtnTitle, BtnImg, BtnImgWrapper } from "./help.style";

const HelpButton = ({ title, src, onClick }) => {
  return (
    <HelpBtn onClick={onClick}>
      <BtnImgWrapper>
        <BtnImg src={src} />
      </BtnImgWrapper>
      <BtnTitle>{title}</BtnTitle>
    </HelpBtn>
  );
};

export default HelpButton;
