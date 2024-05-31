import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Housing from "@/pages/Housing";
import UserProfile from "@/pages/UserProfile";
import HouseDetails from "@/pages/HouseDetails";

import GuestFeatures from "@/components/GuestFeatures";
import HostFeatures from "@/components/HostFeatures/HostFeatures";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm/LoginForm";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/housedetails/:id" element={<HouseDetails />} />
      <Route path="/#guest" element={<GuestFeatures />} />
      <Route path="/signin" element={<NewUserForm />} />
      <Route path="/#host" element={<HostFeatures />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default RoutesIndex;
