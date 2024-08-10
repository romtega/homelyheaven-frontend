import { useContext } from "react";
import { ReviewsContext } from "@/context/ReviewsContext";

export function useReviewsContext() {
  const context = useContext(ReviewsContext);

  if (!context) {
    throw new Error("useReviewsContext must be used within a ReviewsProvider");
  }

  return context;
}
