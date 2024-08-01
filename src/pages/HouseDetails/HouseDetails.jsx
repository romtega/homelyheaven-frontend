import GuestTestimonial from "@/components/GuestTestimonial";
import guestImg from "@/assets/hero-guest.jpg";
import "./housedetails.css";

const HouseDetails = () => {
  return (
    <section className="section__housedetails grid">
      <div className="housedetails__info flex">
        <div className="housedetails__img-wrapper" />
        <div className="housedetails__header flex">
          <div className="housedetails__location">
            <h2 className="housedetails__hotel-name font-3" />
            <span className="housedetails__city font-base text-gray" />
          </div>
          <div className="housedetails__pricing">
            <span className="housedetails__price font-3 fw-3" />
            <span className="housedetails__price-detail font-sm">
              por noche
            </span>
          </div>
        </div>
        <ul className="housedetails__perks flex text-secondary">
          <li className="housedetails__perk font-1">
            <span className="housedetails__perk-description font-sm" />
          </li>
          <li className="housedetails__perk font-1">
            <span className="housedetails__perk-description font-sm capitalize" />
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-shower" />
            <span className="housedetails__perk-description font-sm">
              Baños
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-bed" />
            <span className="housedetails__perk-description font-sm">
              Personas
            </span>
          </li>
        </ul>
        <div className="housedetails__description grid">
          <div className="housedetails__text flex font-base">
            <p />
            <div className="housedetails__cta flex">
              <button className="housedetails__btn bg-accent text-white fw-3">
                Reservar
              </button>
              <button className="housedetails__btn flex">
                <i className="fa-regular fa-heart text-accent" />
                Agrega a tus favoritos
              </button>
            </div>
          </div>
          <div className="housedetails__map-wrapper" />
        </div>
      </div>

      <aside className="housedetails__reviews flex">
        <h2 className="housedetails__reviews-title font-2">Reseñas</h2>
        <GuestTestimonial />
        <GuestTestimonial />
        <GuestTestimonial />
        <GuestTestimonial />
      </aside>
    </section>
  );
};

export default HouseDetails;
