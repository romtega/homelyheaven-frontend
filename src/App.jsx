import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RoutesIndex from "@/routes/RoutesIndex";
import Footer from "@/components/Footer";
import { HousingProvider } from "@/context/HousingContext";
import { AuthProvider } from "@/context/AuthContext";
import { UserProvider } from "@/context/UserContext";
import { ReviewsProvider } from "@/context/ReviewsContext";

const App = () => {
  return (
    <UserProvider>
      <AuthProvider>
        <HousingProvider>
          <ReviewsProvider>
            <BrowserRouter>
              <Navbar />
              <RoutesIndex />
              <Footer />
            </BrowserRouter>
          </ReviewsProvider>
        </HousingProvider>
      </AuthProvider>
    </UserProvider>
  );
};

export default App;
