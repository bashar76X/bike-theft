import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import BikesPage from "../pages/BikesPage";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<BikesPage />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default Router;
