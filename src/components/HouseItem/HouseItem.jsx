import "./houseitem.css";

import HostImg from "@/assets/hero-host.jpg";

import { Link } from "react-router-dom";

const HouseItem = () => {
  return (
    <li className="housing__profile grid">
      <div className="housing__img">
        <img
          src={HostImg}
          alt="Imagen de sitio"
          className="housing__img-content"
        />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-1 fw-3">Casa en la montaña</h2>
        <span className="housing__location text-gray">Badajoz, España</span>
        <div className="housing__cta flex">
          <button className="housing__btn grid">
            <i className="fa-regular fa-heart text-accent font-lg" />
          </button>
          <button className="housing__btn bg-primary text-white fw-4">
            <Link to="/housedetails/">Más información</Link>
          </button>
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid font-base text-secondary">
          <li className="housing_perk flex">
            <i className="fa-solid fa-house" />
            <span className="capitalize">Casa</span>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-mountain-sun" />
            <span className="capitalize">Montaña</span>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-shower" />2 Baños
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-bed" />
            <span>4 Personas</span>
          </li>
        </ul>
        <div className="housing__pricing font-base">
          <span className="fw-3 font-base">Calificación:</span>
          <p>
            4.8 <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">$180 </span>
            <span className="text-gray">por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HouseItem;
