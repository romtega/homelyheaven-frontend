import "./guesttestimonial.css";
import User from "@/assets/user.jpg";

const GuestTestimonial = () => {
  return (
    <div className="housedetails__testimonial flex bg-white">
      <div className="testimonials__header flex">
        <div className="testimonials__img-wrapper">
          <img src={User} alt="" />
        </div>
        <div>
          <h3 className="testimonials__name font-base">Nombre con apellido</h3>
          <span className="testimonials__date font-sm text-gray">
            Fecha de reservacion
          </span>
        </div>
      </div>
      <p className="testimonials__description font-sm text-gray">
        Descripcion de unos 3 renglones Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default GuestTestimonial;
