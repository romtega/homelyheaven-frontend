/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import "./housedetails.css";
import GuestTestimonial from "@/components/GuestTestimonial/";
import guestImg from "@/assets/hero-guest.jpg";

const HouseDetails = () => {
  return (
    <section className="section__housedetails grid">
      <div className="housedetails__info flex">
        <div className="housedetails__img-wrapper">
          <img src={guestImg} alt="Hotel" className="housedetails__img" />
        </div>
        <div className="housedetails__header flex">
          <div className="housedetails__location">
            <h2 className="housedetails__hotel-name font-2">
              Nombre del hotel
            </h2>
            <span className="housedetails__city font-base">
              Ciudad donde se encuentra
            </span>
          </div>
          <div className="housedetails__pricing">
            <span className="housedetails__price font-1">$2500 </span>
            <span className="housedetails__price-detail font-base">
              / por noche
            </span>
          </div>
        </div>
        <ul className="housedetails__perks flex">
          <li
            className="housedetails__perk font-lg
          "
          >
            <i className="fa-solid fa-mountain-sun" />
            <quote className="housedetails__perk-description font-sm">
              Vista a la montaña
            </quote>
          </li>
          <li
            className="housedetails__perk font-lg
          "
          >
            <i className="fa-solid fa-train" />
            <quote className="housedetails__perk-description font-sm">
              Transporte publico
            </quote>
          </li>
          <li
            className="housedetails__perk font-lg
          "
          >
            <i className="fa-solid fa-shower" />
            <quote className="housedetails__perk-description font-sm">
              2 Baños
            </quote>
          </li>
          <li
            className="housedetails__perk font-lg
          "
          >
            <i className="fa-solid fa-bed" />
            <quote className="housedetails__perk-description font-sm">
              5 Personas
            </quote>
          </li>
        </ul>
        <div className="housedetails__description grid">
          <div className="housedetails__text grid font-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              consequatur accusantium autem ipsum. Aspernatur delectus nesciunt
              quas porro quaerat doloremque ad temporibus harum qui consequuntur
              dignissimos suscipit, non voluptas asperiores!
            </p>
            <div className="housedetails__cta flex">
              <button className="housedetails__btn">Reservar</button>
              <button className="housedetails__btn flex">
                <i className="fa-regular fa-heart" />
                Agrega a tus avoritos
              </button>
            </div>
          </div>
          <div className="housedetails__map">
            <img src={guestImg} alt="Hotel" />
          </div>
        </div>
      </div>

      <aside className="housedetails__reviews flex flow">
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
