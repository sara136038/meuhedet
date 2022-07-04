import React from "react";
import { Routes, Route } from "react-router-dom";

import Queues from "../components/pages/queues/queues";
import Home from "../components/pages/home/home";

const MainRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/queues" element={<Queues />} />
    </Routes>
  );
};

export default MainRoutes;
