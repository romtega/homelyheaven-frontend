import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RoutesIndex from "./routes/RoutesIndex";
import Footer from "@/components/Footer";
import { HousingProvider } from "@/context/HousingContext"; // Importa el HousingProvider

const App = () => {
  return (
    <HousingProvider>
      <BrowserRouter>
        <Navbar />
        <RoutesIndex />
        <Footer />
      </BrowserRouter>
    </HousingProvider>
  );
};

export default App;
