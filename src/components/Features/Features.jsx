/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import "./features.css";

const Features = () => {
  return (
    <section className="features">
      <div className="features__title grid">
        <h2 className="font-3">No sabes dónde pasar el fin de semana?</h2>
      </div>
      <div className="features__steps grid">
        <div className="features__step flex bg-primary">
          <span className="features__number fw-4 text-gray">01</span>
          <h3 className="features__subtitle font-1">
            Encuentra tu alojamiento perfecto
          </h3>
          <p className="features__description font-base">
            Explora nuestra amplia selección de alojamientos disponibles para
            tus próximas vacaciones. Encuentra opciones que se adapten a tus
            necesidades y preferencias, desde acogedores apartamentos hasta
            lujosas villas.
          </p>
        </div>
        <div>vacio</div>
        <div>vacio</div>
        <div>vacio</div>
        <div className="features__step flex bg-primary">
          <span className="features__number fw-4 text-gray">02</span>
          <h3 className="features__subtitle font-1">
            Consulta disponibilidad y fechas
          </h3>
          <p className="features__description font-base">
            Revisa fácilmente la disponibilidad y elige las fechas ideales para
            tu estancia. Nuestro sistema de reservas te permite seleccionar las
            fechas que mejor se adapten a tu itinerario, garantizando una
            planificación sin contratiempos.
          </p>
        </div>
        <div>vacio</div>
        <div>vacio</div>
        <div>vacio</div>

        <div className="features__step flex bg-primary">
          <span className="features__number fw-4 text-gray">03</span>
          <h3 className="features__subtitle font-1">
            Reserva y disfruta de tus vacaciones
          </h3>
          <p className="features__description font-base">
            Accede a tu cuenta para completar tu reserva en pocos clics. Si aún
            no tienes una cuenta, crea una rápidamente para gestionar tus
            reservas y disfrutar de una experiencia de vacaciones sin
            preocupaciones.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
