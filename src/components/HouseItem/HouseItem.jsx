import "./houseitem.css";

const HouseItem = () => {
  return (
    <li className="housing__profile grid">
      <div className="housing__img">
        <img src="" alt="Imagen de sitio" className="housing__img-content" />
      </div>
      <div className="housing__info flex font-base">
        <h2 className="font-1 fw-3" />
        <span className="housing__location text-gray" />
        <div className="housing__cta flex">
          <button className="housing__btn grid">
            <i className="fa-regular fa-heart text-accent font-lg" />
          </button>
          Más información
        </div>
      </div>
      <div className="housing__features flex">
        <ul className="housing__perks grid font-base text-secondary">
          <li className="housing_perk flex">
            <span />
          </li>
          <li className="housing_perk flex">
            <span className="capitalize" />
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-shower" />
          </li>
          <li className="housing_perk flex">
            <i className="fa-solid fa-bed" />
            <span />
          </li>
        </ul>
        <div className="housing__pricing font-sm">
          <span className="fw-3 font-base">Calificación:</span>
          <p>
            <span className="font-lg">/ 5.0</span>
          </p>
          <p>
            <span className="font-2">$ </span>
            <span className="text-gray">por noche</span>
          </p>
        </div>
      </div>
    </li>
  );
};

export default HouseItem;
