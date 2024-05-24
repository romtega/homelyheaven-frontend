/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { BrowserRouter } from "react-router-dom";
import Navbar from "@/components/Navbar";
import RoutesIndex from "./routes/RoutesIndex";
import Footer from "@/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <RoutesIndex />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
