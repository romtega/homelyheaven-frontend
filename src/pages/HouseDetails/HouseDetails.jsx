import GuestTestimonial from "@/components/GuestTestimonial/";
import guestImg from "@/assets/hero-guest.jpg";
import Map from "@/assets/map.png";

import "./housedetails.css";

const HouseDetails = () => {
  return (
    <section className="section__housedetails grid">
      <div className="housedetails__info flex">
        <div className="housedetails__img-wrapper">
          <img src={guestImg} alt="Hotel" className="housedetails__img" />
        </div>
        <div className="housedetails__header flex">
          <div className="housedetails__location">
            <h2 className="housedetails__hotel-name font-3">
              Nombre del hotel
            </h2>
            <span className="housedetails__city font-base text-gray">
              Ciudad donde se encuentra
            </span>
          </div>
          <div className="housedetails__pricing">
            <span className="housedetails__price font-1">$2500 / </span>
            <span className="housedetails__price-detail font-sm">
              por noche
            </span>
          </div>
        </div>
        <ul className="housedetails__perks flex">
          <li className="housedetails__perk font-1 text-gray">
            <i className="fa-solid fa-mountain-sun" />
            <quote className="housedetails__perk-description font-sm">
              Vista a la montaña
            </quote>
          </li>
          <li className="housedetails__perk font-1 text-gray">
            <i className="fa-solid fa-train" />
            <quote className="housedetails__perk-description font-sm">
              Transporte publico
            </quote>
          </li>
          <li className="housedetails__perk font-1 text-gray">
            <i className="fa-solid fa-shower" />
            <quote className="housedetails__perk-description font-sm">
              2 Baños
            </quote>
          </li>
          <li className="housedetails__perk font-1 text-gray">
            <i className="fa-solid fa-bed" />
            <quote className="housedetails__perk-description font-sm">
              5 Personas
            </quote>
          </li>
        </ul>
        <div className="housedetails__description grid">
          <div className="housedetails__text flex font-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              consequatur accusantium autem ipsum. Aspernatur delectus nesciunt
              quas porro quaerat doloremque ad temporibus harum qui consequuntur
              dignissimos suscipit, non voluptas asperiores!
            </p>
            <div className="housedetails__cta flex">
              <button className="housedetails__btn bg-accent text-white fw-3">
                Reservar
              </button>
              <button className="housedetails__btn flex">
                <i className="fa-regular fa-heart text-accent" />
                Agrega a tus avoritos
              </button>
            </div>
          </div>
          <div className="housedetails__map-wrapper">
            <img src={Map} alt="Hotel" />
          </div>
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
