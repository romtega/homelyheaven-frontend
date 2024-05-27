/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import { Link } from "react-router-dom";
import "./houseitem.css";
import hostImg from "@/assets/hero-host.jpg";

const HouseItem = () => {
  return (
    <li className="housing__profile flex">
      <div className="housing__img">
        <img src={hostImg} alt="Imagen de sitio" />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-3">Nombre del sitio</h2>
        <p className="housing__location font-lg text-gray">ubicacion</p>
        <div className="housing__cta flex">
          <button className="housing__btn bg-white grid">
            <i className="fa-solid fa-heart text-accent font-lg" />
          </button>
          <Link to="/housedetails">
            <button className="housing__btn bg-primary text-white">
              Mas información
            </button>
          </Link>
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid font-lg">
          <li className="housing_perk flex">
            <i className="fa-solid fa-mountain-sun" />
            <quote>Vista a la montaña</quote>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-train" />
            <quote>Transporte publico</quote>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-shower" />
            <quote>2 Baños</quote>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-bed" />
            <quote>5 Personas</quote>
          </li>
        </ul>
        <div className="housing__pricing font-sm">
          <p>
            3.0 <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">$105 </span>
            <span>por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HouseItem;
