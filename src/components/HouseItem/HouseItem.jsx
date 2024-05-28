import { Link } from "react-router-dom";
import hostImg from "@/assets/hero-host.jpg";
import "./houseitem.css";

const HouseItem = () => {
  return (
    <li className="housing__profile flex">
      <div className="housing__img">
        <img
          src={hostImg}
          alt="Imagen de sitio"
          className="housing__img-content"
        />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-2 fw-3">Casa de la Montaña</h2>
        <span className="housing__location text-gray">Valle de los Sueños</span>
        <span className="housing__location text-gray">Colorado</span>
        <div className="housing__cta flex">
          <button className="housing__btn grid">
            <i className="fa-regular fa-heart text-accent font-lg" />
          </button>
          <button className="housing__btn bg-primary text-white fw-4">
            <Link to="/housedetails">Más información</Link>
          </button>
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid">
          <li className="housing_perk flex">
            <i className="fa-solid fa-mountain-sun" />
            <quote>Vista a la montaña</quote>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-train" />
            <quote>Transporte público cercano</quote>
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
          <span className="fw-3">Calificación:</span>
          <p>
            3.0 <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">$105 </span>
            <span className="text-gray">por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HouseItem;
