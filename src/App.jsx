import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesIndex from "@/routes/RoutesIndex";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <BrowserRouter>
          <Navbar />
          <RoutesIndex />
          <Footer />
        </BrowserRouter>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
