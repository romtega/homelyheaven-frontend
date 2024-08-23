/* eslint-disable multiline-ternary */
import "./housing.css";

import { usePropertyContext } from "@/hooks/usePropertyContext";
import LoadingSpinner from "@/components/LoadingSpinner";
import ChevronBtn from "@/components/ChevronBtn";
import HouseItem from "@/components/HouseItem";

const Housing = () => {
  const { propertyData, loading, searchBar } = usePropertyContext();

  const searchedProperty = propertyData.filter((property) => {
    const searchTerm = searchBar.toLowerCase();
    const fieldToSearch = [
      property.title,
      property.location.city,
      property.location.state,
      property.location.country,
    ];

    return fieldToSearch.some((field) =>
      field?.toLowerCase().includes(searchTerm)
    );
  });

  if (loading) return <LoadingSpinner />;

  return (
    <section className="section__housing">
      <ul className="housing__list flex">
        {searchedProperty.length === 0 ? (
          <p>No hay ninguna propiedad registrada actualmente</p>
        ) : (
          searchedProperty.map((property) => (
            <HouseItem key={property._id} property={property} />
          ))
        )}
      </ul>
      <ChevronBtn />
    </section>
  );
};

export default Housing;
