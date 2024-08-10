import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesIndex from "@/routes/RoutesIndex";
import { AuthProvider } from "./context/AuthContext";
import { UserProvider } from "./context/UserContext";
import { PropertyProvider } from "./context/PropertyContext";
import { ReviewsProvider } from "./context/ReviewsContext";

const App = () => {
  return (
    <PropertyProvider>
      <AuthProvider>
        <UserProvider>
          <ReviewsProvider>
            <BrowserRouter>
              <Navbar />
              <RoutesIndex />
              <Footer />
            </BrowserRouter>
          </ReviewsProvider>
        </UserProvider>
      </AuthProvider>
    </PropertyProvider>
  );
};

export default App;
