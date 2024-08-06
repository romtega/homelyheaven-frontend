import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function useAuthContext() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuthContext should be inside AuthProvider");
  }
  return context;
}
