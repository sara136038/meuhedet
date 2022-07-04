import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../components/pages/login/login";
import Main from "../components/layout/main/main";

const MyRoute = (props) => {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MyRoute;
