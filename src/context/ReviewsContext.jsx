/* eslint-disable space-before-function-paren */
import { createContext, useEffect, useState } from "react";
import axiosInstance from "@/services/axiosConfig.js";

const ReviewsContext = createContext();

function ReviewsProvider({ children }) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchReviews = () => {
    axiosInstance
      .get("api/v1/reviews")
      .then((response) => {
        setReviews(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching reviews data", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const contextData = { reviews, loading };

  return (
    <ReviewsContext.Provider value={contextData}>
      {children}
    </ReviewsContext.Provider>
  );
}

export { ReviewsContext, ReviewsProvider };
