/* eslint-disable jsx-quotes */
/* eslint-disable quotes */
/* eslint-disable space-before-function-paren */
/* eslint-disable semi */
import "./guesttestimonial.css";
import guestImg from "@/assets/hero-guest.jpg";

const GuestTestimonial = () => {
  return (
    <div className="housedetails__testimonial">
      <div className="housedetails__testimonials-header flex">
        <div className="housedetails_testimonials-img">
          <img src={guestImg} alt="" />
        </div>
        <div>
          <h3 className="housedetails__testimonial-name font-lg">
            Nombre con apellido
          </h3>
          <span className="housedetails__testimonial-date font-sm">
            Fecha de reservacion
          </span>
        </div>
      </div>
      <p className="housedetails__testimonial-description font-base">
        Descripcion de unos 3 renglones Lorem, ipsum dolor sit amet consectetur
        adipisicing elit.
      </p>
    </div>
  );
};

export default GuestTestimonial;
