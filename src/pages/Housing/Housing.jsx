/* eslint-disable multiline-ternary */
import "./housing.css";

import ChevronBtn from "@/components/ChevronBtn";
import HouseItem from "@/components/HouseItem";

const Housing = () => {
  return (
    <section className="section__housing">
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
