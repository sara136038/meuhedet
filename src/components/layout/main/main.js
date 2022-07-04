import React from "react";

import Header from "../header/header";
import AccessibilityButton from "../accessibility/accessibilityButton";
import MainRoutes from "../../../navigation/mainRoutes";

const Main = (props) => {
  return (
    <div>
      <Header />
      <AccessibilityButton />
      <MainRoutes />
    </div>
  );
};

export default Main;
