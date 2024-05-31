import { createContext, useEffect, useState } from "react";
import axiosInstance from "@/api/axiosConfig.js";

const HousingContext = createContext();

function HousingProvider({ children }) {
  const [housing, setHousing] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHousing = () => {
    axiosInstance
      .get("api/v1/housing")
      .then((response) => {
        setHousing(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar datos de vivienda", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    getHousing();
  }, []);

  const dataContext = { housing, loading };

  return (
    <HousingContext.Provider value={dataContext}>
      {children}
    </HousingContext.Provider>
  );
}

export { HousingContext, HousingProvider };
