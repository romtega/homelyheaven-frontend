/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import House from "../../components/House/House";
import "./housing.css";

const Housing = () => {
  return (
    <section className="section__housing ">
      <ul className="housing__list flex">
        <House />
        <House />
        <House />
        <House />
      </ul>
    </section>
  );
};

export default Housing;
