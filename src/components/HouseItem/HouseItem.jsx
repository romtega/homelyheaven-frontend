import { Link } from "react-router-dom";
import hostImg from "@/assets/hero-host.jpg";
import "./houseitem.css";

const HouseItem = ({ housing }) => {
  let typeIcon;
  if (housing.type === "Casa") {
    typeIcon = <i className="fa-solid fa-house" />;
  } else if (housing.type === "Villa") {
    typeIcon = <i className="fa-solid fa-mountain-city" />;
  } else if (housing.type === "Apartamento") {
    typeIcon = <i className="fa-solid fa-building" />;
  } else if (housing.type === "Cabaña") {
    typeIcon = <i className="fa-solid fa-mountain" />;
  }

  let placeIcon;
  if (housing.place === "desierto") {
    placeIcon = <i className="fa-solid fa-sun" />;
  } else if (housing.place === "playa") {
    placeIcon = <i className="fa-solid fa-umbrella-beach" />;
  } else if (housing.place === "ciudad") {
    placeIcon = <i className="fa-solid fa-city" />;
  } else if (housing.place === "montaña") {
    placeIcon = <i className="fa-solid fa-mountain-sun" />;
  } else if (housing.place === "villa") {
    placeIcon = <i className="fa-solid fa-mountain" />;
  }

  const bathroomPlural = housing.bathrooms === 1 ? "Baño" : "Baños";
  const bedroomPlural = housing.bedrooms === 1 ? "Persona" : "Personas";
  const firstImgUrl = housing.imgUrl.length > 0 ? housing.imgUrl[0] : hostImg;
  return (
    <li className="housing__profile grid">
      <div className="housing__img">
        <img
          src={firstImgUrl}
          alt="Imagen de sitio"
          className="housing__img-content"
        />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-1 fw-3">{housing.name}</h2>
        <span className="housing__location text-gray">
          {housing.address.state}, {housing.address.country}
        </span>
        <div className="housing__cta flex">
          <button className="housing__btn grid">
            <i className="fa-regular fa-heart text-accent font-lg" />
          </button>
          <Link
            to={`/housedetails/${housing._id}`}
            className="housing__btn bg-primary text-white fw-4"
          >
            Más información
          </Link>
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid font-base text-secondary">
          <li className="housing_perk flex">
            {typeIcon}
            <span>{housing.type}</span>
          </li>
          <li className="housing_perk flex">
            {placeIcon}
            <span className="capitalize">{housing.place}</span>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-shower" />
            {housing.bathrooms} {bathroomPlural}
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-bed" />
            <span>
              {housing.bedrooms} {bedroomPlural}
            </span>
          </li>
        </ul>
        <div className="housing__pricing font-sm">
          <span className="fw-3 font-base">Calificación:</span>
          <p>
            {housing.califications} <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">${housing.price} </span>
            <span className="text-gray">por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HouseItem;
