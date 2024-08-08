import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig.js";

const PropertyContext = createContext();

function PropertyProvider({ children }) {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllProperties = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/properties");
      setPropertyData(response.data);
    } catch (error) {
      console.error("Fetching properties failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProperties();
  }, []);

  const dataContext = { propertyData, loading };
  return (
    <PropertyContext.Provider value={dataContext}>
      {children}
    </PropertyContext.Provider>
  );
}

export { PropertyContext, PropertyProvider };
