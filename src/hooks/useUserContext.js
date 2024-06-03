import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

export function useUserContext() {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error(
      "useUserContext debe estar dentro del provedor UserProvider"
    );
  }
  return context;
}
