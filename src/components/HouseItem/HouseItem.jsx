import "./houseitem.css";
import HostImg from "@/assets/hero-host.jpg";
import { Link } from "react-router-dom";

const environmentIcons = {
  desierto: "fa-solid fa-mountain-sun",
  montaña: "fa-solid fa-mountain",
  playa: "fa-solid fa-umbrella-beach",
  ciudad: "fa-solid fa-city",
};

const HouseItem = ({ property }) => {
  const {
    _id,
    title,
    location: { city, country },
    bedrooms,
    environment,
    bathrooms,
    maxGuests,
    ratings: { average },
    pricePerNight,
    images,
  } = property;

  const bedroomText = bedrooms === 1 ? "Cuarto" : "Cuartos";
  const bathroomText = bathrooms === 1 ? "Baño" : "Baños";
  const guestText = maxGuests === 1 ? "Persona" : "Personas";

  const environmentIcon =
    environmentIcons[environment] || "fa-solid fa-question";

  return (
    <li className="housing__profile grid">
      <div className="housing__img">
        <img
          src={images[0]}
          alt="Imagen de sitio"
          className="housing__img-content"
        />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-1 fw-3">{title}</h2>
        <span className="housing__location text-gray">
          {city}, {country}
        </span>
        <div className="housing__cta flex">
          <button className="housing__btn grid">
            <i className="fa-regular fa-heart text-accent font-lg" />
          </button>
          <button className="housing__btn bg-primary text-white fw-4">
            <Link to={`/housingdetails/${_id}`}>Más información</Link>
          </button>
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid font-base text-secondary">
          <li className="housing_perk flex">
            <i className="fa-solid fa-bed" />
            <span className="capitalize">
              {bedrooms} {bedroomText}
            </span>
          </li>
          <li className="housing_perk flex">
            <i className={environmentIcon} />
            <span className="capitalize">{environment}</span>
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-shower" />
            {bathrooms} {bathroomText}
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-users" />
            <span>
              {maxGuests} {guestText}
            </span>
          </li>
        </ul>
        <div className="housing__pricing font-base">
          <span className="fw-3 font-base">Calificación:</span>
          <p>
            {average}
            <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">${pricePerNight} </span>
            <span className="text-gray">por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HouseItem;
