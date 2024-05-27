import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import Housing from "@/pages/Housing";
import UserProfile from "@/pages/UserProfile";
import HouseDetails from "@/pages/HouseDetails";
import Features from "@/components/Features/Features";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/housedetails" element={<HouseDetails />} />
      <Route path="/#guest" element={<Features />} />
    </Routes>
  );
};

export default RoutesIndex;
