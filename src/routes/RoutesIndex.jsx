import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Housing from "@/pages/Housing";
import UserProfile from "@/pages/UserProfile";
import LoginForm from "@/components/LoginForm";
import SigninForm from "@/components/NewUserForm";
import HouseDetails from "@/pages/HouseDetails";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="housedetails" element={<HouseDetails />} />
      <Route path="/user/*" element={<UserProfile />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signin" element={<SigninForm />} />
    </Routes>
  );
};

export default RoutesIndex;
