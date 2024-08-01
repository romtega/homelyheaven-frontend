import { BrowserRouter } from "react-router-dom";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesIndex from "@/routes/RoutesIndex";

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
