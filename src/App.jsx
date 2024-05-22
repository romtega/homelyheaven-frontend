/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { BrowserRouter } from "react-router-dom";
import ChevronBtn from "@/components/ChevronBtn";
import Navbar from "@/components/Navbar";
import RoutesIndex from "./routes/RoutesIndex";
import Footer from "@/components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ChevronBtn />
      <Navbar />
      <RoutesIndex />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
