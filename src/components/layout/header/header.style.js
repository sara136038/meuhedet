import styled, { css } from "styled-components";

import { ReactComponent as SearchSvg } from "./assets/ico-search.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ClearIcon from "@mui/icons-material/Clear";

export const UpperHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  box-shadow: 0 0 6px rgb(0 0 0 / 20%);
  position: absolute;
  right: 0;
  top: 0;
  left: 0;
  z-index: 200;
`;

export const FaderPopup = styled.div`
  position: fixed;
  z-index: 19;
  background-color: #222;
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.isShowSearchCollapse && "0.75") || "0"};
  transition: opacity 0.4s ease-in-out;
`;

export const LeftHeaderContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 20;
`;

export const RightHeaderContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  z-index: 20;
`;

const BurgerLine = css`
  height: 2px;
  background-color: #ffffff;
  transition-duration: 0.3s;
`;

export const SideBurgerLine = styled.div`
  ${BurgerLine}
  width: 80%;
`;

export const MiddleBurgerLine = styled.div`
  ${BurgerLine}
  width:100%;
`;

export const BurgerHold = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom left, #f16b1e 60%, #fd9b3f);
  border-radius: 30px 0 0 100px;
  cursor: pointer;
  height: 80px;
  width: 80px;
  margin-left: 23px;

  &:hover ${SideBurgerLine} {
    width: 100%;
  }

  &:hover ${MiddleBurgerLine} {
    width: 80%;
  }

  @media (max-width: 1023px) {
    width: 64px;
  }

  @media (max-width: 767px) {
    width: 58px;
    border-radius: 18px 0 0 43px;
  }
`;

export const Burger = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 16px;
  width: 18px;
`;

export const LogoImg = styled.img`
  width: 170px;
  margin: 5px 0 0 30px;

  @media (max-width: 1199px) {
    width: 120px;
  }

  @media (max-width: 1023px) {
    margin-left: 0;
  }

  @media (max-width: 767px) {
    width: 100px;
  }
`;

export const Tel = styled.div`
  display: flex;
  align-items: center;
  color: #b0b0b0;
  font-weight: 700;

  @media (max-width: 1020px) {
    display: none;
  }
`;

export const TelNumber = styled.div`
  font-size: 33px;
  font-weight: bold;

  @media (max-width: 1199px) {
    font-size: 29px;
  }
`;

export const TelImg = styled.img`
  width: 18px;
  padding: 0 0 0 4px;
`;

export const Star = styled.span`
  font-size: 40px;
  padding: 10px 4px 0 0;
`;

export const SearchHeaderContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 2.5vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SearchWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  width: 100%;
  background: #fff;
  border: 1px solid #c9c9c9;
  border-radius: 8px;

  & * {
    border: none;
    outline: none;
    background: none;
  }
`;

export const SearchInput = styled.input`
  height: 100%;
  flex: 1;
  padding: 0 15px;
  font: 18px FbTypoPas, sans-serif;
`;

export const SearchButton = styled.button`
  height: 100%;
  width: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.isShowSearchCollapse && "pointer") || "text"};
`;

export const SearchIcon = styled(SearchSvg)`
  width: 23px;
`;

export const LeftHeaderBtns = styled.ul`
  display: flex;
`;

export const LeftHeaderBtn = styled.li`
  display: flex;
  margin: 0 0 0 16px;
  cursor: pointer;
`;

export const LeftHeaderBtnLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LeftHeaderButtonIcon = styled.div`
  display: flex;
  height: 45px;
  width: 50px;
  margin: 0 0 0 7px;
  align-items: center;
  justify-content: center;
  border-radius: 20px 14px 30px 14px;
  background-image: linear-gradient(
    180deg,
    ${(props) => props.background[0]},
    ${(props) => props.background[1]}
  );

  @media (max-width: 1199px) {
    height: 35px;
    width: 40px;
  }

  @media (max-width: 767px) {
    border-radius: 16px 12px;
    margin: 0;
  }
`;

export const LeftHeaderButtonText = styled.span`
  font-size: 18px;
  line-height: 14px;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const ArrowDownContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 20;
  transform: translate(-50%);
  width: 98px;
  left: 50%;
  top: 100%;
  filter: drop-shadow(0 3px 2px rgba(0, 0, 0, 0.1));
  background: url("./down-arrow.svg") no-repeat 50% 100%;
`;

export const ArrowIcon = styled(FontAwesomeIcon)`
  opacity: 0.42;
  position: relative;
  top: -5px;
  transition: all 0.3s ease-out;
`;

export const SearchCollapseCantainer = styled.div`
  padding-top: 40px;
  width: 80%;
  margin: auto;
`;

export const H3Header = styled.h3`
  color: #363636;
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 7px;

  @media (max-width: 1439px) {
    font-size: 18px;
  }
`;
export const SearchTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: -4px;
  padding-bottom: 25px;
`;

export const SearchTag = styled.li`
  padding: 4px;
`;

export const SearchTagContent = styled.a`
  background: #ededed;
  border-radius: 22px;
  font-size: 16px;
  line-height: 15px;
  padding: 10px;
  min-width: 133px;
  text-align: center;
  display: block;
  cursor: pointer;

  &:hover {
    background: #ddd;
  }
`;

export const XIcon = styled(ClearIcon)`
  width: 18px !important;
`;
