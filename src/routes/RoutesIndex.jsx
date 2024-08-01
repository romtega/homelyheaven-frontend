import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home";
import Housing from "@/pages/Housing";
import UserProfile from "@/pages/UserProfile";
import LoginForm from "@/components/LoginForm";

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<Housing />} />
      <Route path="/userprofile" element={<UserProfile />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
};

export default RoutesIndex;
