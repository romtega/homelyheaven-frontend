import "./housedetails.css";

import GuestTestimonial from "@/components/GuestTestimonial";
import guestImg from "@/assets/hero-guest.jpg";
import Map from "@/assets/map.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const HouseDetails = () => {
  return (
    <section className="section__housedetails grid">
      <div className="housedetails__info flex">
        <div className="housedetails__img-wrapper">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={true}
            autoPlay
            infiniteLoop
          >
            <div>
              <img src={guestImg} alt="Hotel" className="housedetails__img" />
            </div>
            <div>
              <img src={guestImg} alt="Hotel" className="housedetails__img" />
            </div>
            <div>
              <img src={guestImg} alt="Hotel" className="housedetails__img" />
            </div>
            <div>
              <img src={guestImg} alt="Hotel" className="housedetails__img" />
            </div>
            <div>
              <img src={guestImg} alt="Hotel" className="housedetails__img" />
            </div>
          </Carousel>{" "}
        </div>
        <div className="housedetails__header flex">
          <div className="housedetails__location">
            <h2 className="housedetails__hotel-name font-3">
              Casa en la montaña
            </h2>
            <span className="housedetails__city font-base text-gray">
              Badajoz, España
            </span>
          </div>
          <div className="housedetails__pricing">
            <span className="housedetails__price font-3 fw-3">$180 </span>
            <span className="housedetails__price-detail font-sm">
              por noche
            </span>
          </div>
        </div>
        <ul className="housedetails__perks flex text-secondary">
          <li className="housedetails__perk font-base">
            <i className="fa-solid fa-house" />
            <span className="housedetails__perk-description font-sm">Casa</span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-sun" />
            <span className="housedetails__perk-description font-sm capitalize">
              Desert
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-shower" />
            <span className="housedetails__perk-description font-sm">
              2 Baños
            </span>
          </li>
          <li className="housedetails__perk font-1">
            <i className="fa-solid fa-bed" />
            <span className="housedetails__perk-description font-sm">
              4 Personas
            </span>
          </li>
        </ul>
        <div className="housedetails__description grid">
          <div className="housedetails__text flex font-base">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae explicabo, sequi nostrum, unde consectetur sint fugi
            </p>
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
          <div className="housedetails__map-wrapper">
            <img src={Map} alt="" />
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
