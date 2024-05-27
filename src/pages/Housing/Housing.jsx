/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import ChevronBtn from "@/components/ChevronBtn";
import HouseItem from "@/components/HouseItem";
import "./housing.css";

const Housing = () => {
  return (
    <section className="section__housing ">
      <ul className="housing__list flex">
        <HouseItem />
        <HouseItem />
        <HouseItem />
        <HouseItem />
      </ul>
      <ChevronBtn />
    </section>
  );
};

export default Housing;
