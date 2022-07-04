import React from "react";

import HelpIcons from './helpIcons'
import {
  HelpContainer,
  TitleComtainer,
  Title,
  PhoneNumbr,
  CloseBtn,
  XIcon,
} from "./help.style";

const Help = (props) => {
  const { isShowHelpPanel, setIsShowHelpPanel } = props;

  return (
    <HelpContainer isShowHelpPanel={isShowHelpPanel}>
      <CloseBtn onClick={(e) => setIsShowHelpPanel(false)}>
        <XIcon />
      </CloseBtn>
      <TitleComtainer>
        <Title>אפשר לעזור?</Title>
        <PhoneNumbr>3833*</PhoneNumbr>
      </TitleComtainer>

      <HelpIcons />

    </HelpContainer>
  );
};

export default Help;
