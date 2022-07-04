import React from "react";

import {
  LeftHeaderBtn,
  LeftHeaderBtnLink,
  LeftHeaderButtonIcon,
  LeftHeaderButtonText,
} from "./header.style";

const LeftHeaderButton = ({ children, text, background, onClick }) => {
  return (
    <LeftHeaderBtn onClick={onClick}>
      <LeftHeaderBtnLink>
        <LeftHeaderButtonIcon background={background}>
          {React.cloneElement(children, { style: { width: "23px" } })}
        </LeftHeaderButtonIcon>

        <LeftHeaderButtonText>{text}</LeftHeaderButtonText>
      </LeftHeaderBtnLink>
    </LeftHeaderBtn>
  );
};

export default LeftHeaderButton;
