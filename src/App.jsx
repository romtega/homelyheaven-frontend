import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RoutesIndex from "./routes/RoutesIndex";
import Footer from "@/components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesIndex />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
