import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";

import Home from "@/pages/Home/Home";
import Housing from "@/pages/Housing";
import UserProfile from "@/pages/UserProfile";
import HouseDetails from "@/pages/HouseDetails";

//  import GuestFeatures from "@/components/GuestFeatures";
//  import HostFeatures from "@/components/HostFeatures/HostFeatures";
import NewUserForm from "@/components/NewUserForm";
import LoginForm from "@/components/LoginForm/LoginForm";

const RoutesIndex = () => {
  const { isAuth } = useAuthContext();
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing" element={<Housing />} />
      <Route
        path="/user/*"
        element={isAuth ? <UserProfile /> : <Navigate to="/login" />}
      />
      <Route
        path="/housedetails/:id"
        element={isAuth ? <HouseDetails /> : <Navigate to="/login" />}
      />
      <Route path="/signin" element={<NewUserForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="*" element={<Navigate to="/" />} />
      {/* <Route path="/#guest" element={<GuestFeatures />} /> */}
      {/* <Route path="/#host" element={<HostFeatures />} /> */}
    </Routes>
  );
};

export default RoutesIndex;
