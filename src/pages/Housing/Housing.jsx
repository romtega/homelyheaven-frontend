import ChevronBtn from "@/components/ChevronBtn";
import HouseItem from "@/components/HouseItem";
import "./housing.css";
import { useHousingContext } from "@/hooks/useHousingContext";

const Housing = () => {
  const { housing, loading } = useHousingContext();

  return (
    <section className="section__housing">
      {loading ? (
        <p className="font-2 grid">Loading...</p>
      ) : (
        <>
          <ul className="housing__list flex">
            {housing.map((house) => (
              <HouseItem key={house._id} housing={house} />
            ))}
          </ul>
        </>
      )}
      <ChevronBtn />
    </section>
  );
};

export default Housing;
