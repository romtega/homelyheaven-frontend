import "./guestfeatures.css";

const GuestFeatures = () => {
  return (
    <section className="section__features" id="#guest">
      <h2 className="features__title font-3">
        ¿Planeas un fin de semana inolvidable?
      </h2>
      <div className="features__steps grid">
        <div className="features__step flex">
          <div className="features__header flex">
            <span className="features__number fw-4 text-gray">01</span>
            <h3 className="features__subtitle font-1">
              Encuentra tu alojamiento ideal
            </h3>
          </div>
          <p className="features__description font-base text-gray">
            Descubre nuestra amplia gama de alojamientos perfectos para tus
            próximas vacaciones. Tenemos opciones para todos los gustos y
            necesidades, desde apartamentos acogedores hasta villas lujosas.
          </p>
        </div>
        <div>imagenes</div>
        <div>imagenes</div>
        <div>imagenes</div>
        <div className="features__step flex">
          <div className="features__header flex">
            <span className="features__number fw-4 text-gray">02</span>
            <h3 className="features__subtitle font-1">
              Verifica disponibilidad y fechas
            </h3>
          </div>
          <p className="features__description font-base text-gray">
            Selecciona las fechas perfectas para tu estancia. Nuestro sistema de
            reservas te permite comprobar disponibilidad y elegir el momento
            ideal para tu viaje sin complicaciones.
          </p>
        </div>
        <div>imagenes</div>
        <div>imagenes</div>
        <div>imagenes</div>

        <div className="features__step flex">
          <div className="features__header flex">
            <span className="features__number fw-4 text-gray text-gray">
              03
            </span>
            <h3 className="features__subtitle font-1">Reserva y disfruta</h3>
          </div>
          <p className="features__description font-base text-gray">
            Completa tu reserva en pocos clics. Si no tienes una cuenta,
            regístrate rápidamente y comienza a planear unas vacaciones sin
            preocupaciones con nuestra plataforma fácil de usar.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuestFeatures;
