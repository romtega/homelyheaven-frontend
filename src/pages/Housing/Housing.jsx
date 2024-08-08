/* eslint-disable multiline-ternary */
import "./housing.css";

import { usePropertyContext } from "@/hooks/usePropertyContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import ChevronBtn from "@/components/ChevronBtn";
import HouseItem from "@/components/HouseItem";

const Housing = () => {
  const { propertyData, loading } = usePropertyContext();

  if (loading) return <LoadingSpinner />;

  return (
    <section className="section__housing">
      <ul className="housing__list flex">
        {propertyData.length === 0 ? (
          <p>No hay ninguna propiedad registrada actualmente</p>
        ) : (
          propertyData.map((property) => (
            <HouseItem key={property._id} property={property} />
          ))
        )}
      </ul>
      <ChevronBtn />
    </section>
  );
};

export default Housing;
