import { useContext } from "react";
import { HousingContext } from "@/context/HousingContext";

export function useHousingContext() {
  const context = useContext(HousingContext);

  if (!context) {
    throw new Error(
      "useHousingContext debe estar dentro del provedor HousingProvider"
    );
  }
  return context;
}
