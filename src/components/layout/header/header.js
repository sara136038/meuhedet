import React, { useState } from "react";
import Collapse from "@mui/material/Collapse";

import LeftHeader from "./leftHeader";
import SearchHeader from "./searchHeader";
import RightHeader from "./rightHeader";
import SearchCollapsePanel from "./searchCollapsePanel";
import Help from "./help/help";
import {
  HeaderContainer,
  UpperHeaderContainer,
  ArrowDownContainer,
  ArrowIcon,
  FaderPopup,
} from "./header.style";

const Header = (props) => {
  const [isShowSearchCollapse, setIsShowSearchCollapse] = useState(false);
  const [isShowHelpPanel, setIsShowHelpPanel] = useState(false);

  return (
    <>
      <HeaderContainer onClick={(e) => setIsShowSearchCollapse(false)}>
        <UpperHeaderContainer>
          <RightHeader />
          <SearchHeader
            isShowSearchCollapse={isShowSearchCollapse}
            setIsShowSearchCollapse={setIsShowSearchCollapse}
          />
          <LeftHeader setIsShowHelpPanel={setIsShowHelpPanel} />
        </UpperHeaderContainer>

        <Collapse in={isShowSearchCollapse}>
          <SearchCollapsePanel />
        </Collapse>

        <ArrowDownContainer
          onClick={(e) => {
            e.stopPropagation();
            setIsShowSearchCollapse(!isShowSearchCollapse);
          }}
        >
          {(isShowSearchCollapse && (
            <ArrowIcon icon={["fas", "angle-up"]} />
          )) || <ArrowIcon icon={["fas", "angle-down"]} />}
        </ArrowDownContainer>
      </HeaderContainer>

      {isShowSearchCollapse && (
        <FaderPopup
          isShowSearchCollapse={isShowSearchCollapse}
          onClick={(e) => setIsShowSearchCollapse(false)}
        />
      )}

      {isShowHelpPanel && (
        <Help
          isShowHelpPanel={isShowHelpPanel}
          setIsShowHelpPanel={setIsShowHelpPanel}
        />
      )}
    </>
  );
};

export default Header;
