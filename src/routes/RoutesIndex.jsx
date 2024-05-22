/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable semi */
import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Housing from "@/pages/Housing";
import UserProfile from "@/pages/UserProfile";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="/user" element={<UserProfile />} />
    </Routes>
  );
};

export default RoutesIndex;
