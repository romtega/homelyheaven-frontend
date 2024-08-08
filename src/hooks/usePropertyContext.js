import { useContext } from "react";
import { PropertyContext } from "@/context/PropertyContext";

export function usePropertyContext() {
  const context = useContext(PropertyContext);

  if (!context) {
    throw new Error(
      "usePropertyContext must be used within a PropertyProvider"
    );
  }

  return context;
}
