import { createContext, useEffect, useState } from "react";
import axiosInstance from "@/services/axiosConfig.js";

const HousingContext = createContext();

function HousingProvider({ children }) {
  const [housing, setHousing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchHousing = () => {
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
    fetchHousing();
  }, []);

  const dataContext = { housing, loading, searchTerm, setSearchTerm };

  return (
    <HousingContext.Provider value={dataContext}>
      {children}
    </HousingContext.Provider>
  );
}

export { HousingContext, HousingProvider };
