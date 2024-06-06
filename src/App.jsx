import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RoutesIndex from "@/routes/RoutesIndex";
import Footer from "@/components/Footer";
import { HousingProvider } from "@/context/HousingContext";
import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <HousingProvider>
          <BrowserRouter>
            <Navbar />
            <RoutesIndex />
            <Footer />
          </BrowserRouter>
        </HousingProvider>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
