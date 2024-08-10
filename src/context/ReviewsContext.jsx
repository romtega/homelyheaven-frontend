import { createContext, useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig.js";

const ReviewsContext = createContext();

function ReviewsProvider({ children }) {
  const [reviewsData, setReviewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [propertyId, setPropertyId] = useState(null);

  const fetchAllReviews = async (propertyId) => {
    if (!propertyId) return;

    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/api/v1/properties/${propertyId}/reviews`
      );
      setReviewsData(response.data);
    } catch (error) {
      console.error("Fetching reviews failed", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (propertyId) {
      fetchAllReviews(propertyId);
    }
  }, [propertyId]);

  return (
    <ReviewsContext.Provider value={{ reviewsData, loading, setPropertyId }}>
      {children}
    </ReviewsContext.Provider>
  );
}

export { ReviewsProvider, ReviewsContext };
