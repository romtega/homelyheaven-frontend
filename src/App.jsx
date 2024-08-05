import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosInstance from "./services/axiosConfig";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RoutesIndex from "@/routes/RoutesIndex";

const App = () => {
  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   axiosInstance
  //     .get("/test-endpoint")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //     });
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <RoutesIndex />
      <Footer />
      {/* <div className="app__test">
        <h2>Prueba de Comunicación con el Backend</h2>
        {error && <p>Error: {error}</p>}
        {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div> */}
    </BrowserRouter>
  );
};

export default App;
