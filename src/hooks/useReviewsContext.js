/* eslint-disable space-before-function-paren */
import { useContext } from "react";
import { ReviewsContext } from "@/context/ReviewsContext";

export function useReviewsContext() {
  const context = useContext(ReviewsContext);

  if (!context) {
    throw new Error(
      "useReviewsContext debe estar dentro del provedor ReviewsProvider"
    );
  }
  return context;
}
