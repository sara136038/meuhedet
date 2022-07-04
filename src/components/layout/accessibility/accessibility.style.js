import styled from "styled-components";

export const AccessibilityBtn = styled.button`
  position: fixed;
  z-index: 1025 !important;
  padding: 7px 20px;
  top: 0;
  right: 2px !important;
  color: #ffffff;
  background: linear-gradient(
    to right,
    rgb(0, 137, 196) 0%,
    rgb(0, 155, 223) 100%
  ) !important;
  border: none;
  border-radius: 30px 0 0 30px !important;
  font: 18px / 1 FbTypoPas, sans-serif !important;
  cursor: pointer;

  @media (min-width: 932px) {
    top: 100px !important;
  }
  @media screen and (min-width: 1199px) and (max-width: 1321px) {
    top: 200px !important;
  }
`;
