import styled from "styled-components";
import ClearIcon from "@mui/icons-material/Clear";

export const HelpContainer = styled.div`
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 80px;
  display: flex;
  background-color: #fafafa;
  box-shadow: 0 0 6px #00000033;
  opacity: ${(props) => (props.isShowHelpPanel && "1") || "0"};
  transition: opacity 0.4s ease-in-out;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const TitleComtainer = styled.div`
  background: linear-gradient(180deg, #8cc540 0, #0e8649);
  border-radius: 34px 0 0 120px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 22px 30px 22px 57px;
  margin-left: 6px;
  width: 140px;

  @media (max-width: 1439px) {
    width: 72px;
  }

  @media (max-width: 1023px) {
    background: none;
    border-radius: 0;
    color: #38a250;
    height: auto;
    padding: 30px 0 20px;
    width: auto;
  }
`;

export const Title = styled.span`
  font-size: 46px;
  font-weight: 700;
  line-height: 34px;
  margin: 0 0 4px;
  text-align: center;

  @media (max-width: 1439px) {
    font-size: 34px;
    line-height: 30px;
  }
  @media (max-width: 1023px) {
    font-size: 50px;
    line-height: 40px;
  }
`;
export const PhoneNumbr = styled.span`
  font-size: 44px;
  font-weight: 700;

  @media (max-width: 1439px) {
    font-size: 32px;
  }
  @media (max-width: 1023px) {
    font-size: 50px;
    line-height: 40px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  z-index: 10;
  left: 17px;
  top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 26px;
  background: linear-gradient(180deg, #f1681e 0, #f5851c);
  border-radius: 50%;
  border: none;
  cursor: pointer;
`;

export const XIcon = styled(ClearIcon)`
  color: #ffffff;
  width: 21px !important;
`;

export const Icons = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0 30px;

  @media (max-width: 1023px) {
    padding: 20px 30px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }
`;

export const HelpBtn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnTitle = styled.span`
  margin-top: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 1599px) {
    font-size: 16px;
  }

  @media (max-width: 1439px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 18px;
  }

  @media (max-width: 413px) {
    font-size: 16px;
  }
`;

export const BtnImg = styled.img`
  height: 30px;

  @media (max-width: 1439px) {
    height: 24px;
  }

  @media (max-width: 767px) {
    height: 30px;
  }
`;

export const BtnImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #8cc540 0, #0e8649);
  border-radius: 50%;
  height: 88px;
  width: 88px;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0 0 12px #00000066;
  }

  @media (max-width: 1599px) {
    height: 80px;
    width: 80px;
  }
  @media (max-width: 1439px) {
    height: 70px;
    width: 70px;
  }
  @media (max-width: 1023px) {
    height: 60px;
    width: 60px;
  }
  @media (max-width: 767px) {
    height: 86px;
    width: 86px;
  }
  @media (max-width: 413px) {
    height: 70px;
    width: 70px;
  }
`;
