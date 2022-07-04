import React from "react";
import MediaQuery from "react-responsive";

import { LeftHeaderContainer, LeftHeaderBtns } from "./header.style";
import LeftHeaderButton from "./leftHeaderButton";
import { ReactComponent as HelpIcon } from "./assets/ico-help.svg";
import { ReactComponent as AccountIcon } from "./assets/ico-account.svg";
import { ReactComponent as ComunityIcon } from "./assets/ico-comunity.svg";
import { ReactComponent as SearchIcon } from "./assets/ico-search-white-01.svg";

const LeftHeader = (props) => {
  const { setIsShowHelpPanel } = props;

  return (
    <LeftHeaderContainer>
      <LeftHeaderBtns>
        <LeftHeaderButton
          onClick={(e) => setIsShowHelpPanel(true)}
          text={["אפשר", <br key={1} />, "לעזור?"]}
          background={["#8cc540 0", "#0e8649"]}
        >
          <HelpIcon />
        </LeftHeaderButton>

        <MediaQuery minWidth={768}>
          <LeftHeaderButton
            text={["הצטרפות", <br key={2} />, "למאוחדת"]}
            background={["#fd9b3f 0", "#f1681e"]}
          >
            <ComunityIcon />
          </LeftHeaderButton>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <LeftHeaderButton background={["#fd9b3f 0", "#f1681e"]}>
            <SearchIcon />
          </LeftHeaderButton>
        </MediaQuery>

        <LeftHeaderButton
          text={["אזור", <br key={3} />, "אישי"]}
          background={["#41bbf0 0", "#0091d0"]}
        >
          <AccountIcon />
        </LeftHeaderButton>
      </LeftHeaderBtns>
    </LeftHeaderContainer>
  );
};

export default LeftHeader;
