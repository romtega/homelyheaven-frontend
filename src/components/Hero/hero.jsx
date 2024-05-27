/* eslint-disable react/jsx-boolean-value */
import { Link as ScrollLink } from "react-scroll";
import "./hero.css";

const Hero = () => {
  return (
    <section className="section__hero grid">
      <div className="hero__guest grid font-base">
        <div className="hero__overlay flex">
          <h2 className="hero__title font-3 ">Encuentra tu estancia ideal</h2>
          <p className="hero__description">
            Explora alojamientos adaptados a tus necesidades. Inicia tu búsqueda
            y encuentra tu hogar perfecto.
          </p>
          <ScrollLink
            to="#guest"
            className="hero__btn  text-white uppercase fw-4 letter-spacing-2"
            spy={true}
            smooth={true}
            offset={-70}
          >
            Buscar ahora
          </ScrollLink>
        </div>
      </div>
      <div className="hero__host grid font-base">
        <div className="hero__overlay flex">
          <h2 className="hero__title font-3">Renta tu casa fácilmente</h2>
          <p className="hero__description">
            Publica tu casa de manera sencilla y conéctate con viajeros que
            buscan lugares únicos para alojarse.
          </p>
          <ScrollLink
            to="#guest"
            className="hero__btn  text-white uppercase fw-4 letter-spacing-2"
            spy={true}
            smooth={true}
            offset={-70}
          >
            Empezar
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
