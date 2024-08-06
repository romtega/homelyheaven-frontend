import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesIndex from "@/routes/RoutesIndex";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
