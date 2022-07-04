import React from "react";

import {
  SearchHeaderContainer,
  SearchInput,
  SearchButton,
  SearchWraper,
  SearchIcon,
  XIcon,
} from "./header.style";

const SearchHeader = (props) => {
  const { isShowSearchCollapse, setIsShowSearchCollapse } = props;

  return (
    <SearchHeaderContainer>
      <SearchWraper>
        <SearchInput
          placeholder="לדוגמה: מרפאת חדרה או רפואת עור"
          onClick={(e) => {e.stopPropagation(); setIsShowSearchCollapse(true)}}
        />
        <SearchButton isShowSearchCollapse={isShowSearchCollapse}>
          {(isShowSearchCollapse && <XIcon />) || <SearchIcon />}
        </SearchButton>
      </SearchWraper>
    </SearchHeaderContainer>
  );
};

export default SearchHeader;
