import "./hostfeatures.css";

const HostFeatures = () => {
  return (
    <section className="section__features" id="#host">
      <h2 className="features__title font-3">
        ¿Quieres rentar tu lugar y ganar dinero extra?
      </h2>

      <div className="features__steps grid">
        <div> </div>
        <div> </div>
        <div className="features__step flex">
          <div className="features__header flex">
            <span className="features__number fw-4 text-gray">01</span>
            <h3 className="features__subtitle font-1">
              Registra tu propiedad fácilmente
            </h3>
          </div>
          <p className="features__description font-base text-gray">
            Completa nuestro formulario sencillo para registrar tu propiedad.
            Proporciona detalles sobre tu espacio, sube fotos atractivas y
            establece tus reglas y disponibilidad.
          </p>
        </div>

        <div> </div>

        <div className="features__step flex">
          <div className="features__header flex">
            <span className="features__number fw-4 text-gray">02</span>
            <h3 className="features__subtitle font-1">
              Establece tus condiciones
            </h3>
          </div>
          <p className="features__description font-base text-gray">
            Nuestro sistema te ayudará a conectarte con viajeros interesados.
            Recibe solicitudes de reserva, comunícate con ellos y acepta las
            reservas que se adapten a tus preferencias.
          </p>
        </div>

        <div> </div>

        <div className="features__step flex">
          <div className="features__header flex">
            <span className="features__number fw-4 text-gray">03</span>
            <h3 className="features__subtitle font-1">
              Recibe a tus huéspedes
            </h3>
          </div>
          <p className="features__description font-base text-gray">
            Una vez configurado todo, empieza a recibir reservas. Nuestro
            sistema te ayudará a gestionar todo el proceso, desde la
            comunicación hasta los pagos.
          </p>
        </div>
        <div> </div>
        <div> </div>
      </div>
    </section>
  );
};

export default HostFeatures;
