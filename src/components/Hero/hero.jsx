/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import "./hero.css";
const Hero = () => {
  return (
    <section className="hero grid">
      <div className="hero__guest grid font-lg">
        <div className="hero__overlay">
          <h2>Guest</h2>
          <p>Ecuentra tu estadia ideal</p>
        </div>
      </div>
      <div className="hero__host grid font-lg">
        <div className="hero__overlay">
          <h2>Host</h2>
          <p>Pon tu casa en renta</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
