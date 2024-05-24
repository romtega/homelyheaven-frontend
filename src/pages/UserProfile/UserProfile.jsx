/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */

import "./userprofile.css";
const UserProfile = () => {
  return (
    <section className="user grid">
      <aside className="user__menu flex font-lg">
        <div className="user__category flex">
          <i className="fa-solid fa-user" /> Informacion de Usuario
        </div>
        <div className="user__category flex">
          <i className="fa-solid fa-bed" />
          Reservaciones
        </div>
        <div className="user__category flex">
          <i className="fa-solid fa-heart d-block" title="Favorites" />
          Favoritos
        </div>
        <div className="user__category flex">
          <i className="fa-solid fa-envelope d-block" title="Messages" />
          Notificaciones
        </div>
        <div className="user__category flex">
          <i className="fa-solid fa-right-from-bracket" />
          Cerrar sesion
        </div>
      </aside>
      <div className="user__info flex font-lg">
        <div className="info__summary flex">
          <div className="info__img">
            <img src="#" alt="" />
          </div>
          <div>
            <p className="info__text">username123</p>
            <span className="font-sm">Host</span>
          </div>
        </div>
        <div className="info__contact flex">
          <div className="info__text">
            <span className="font-sm">Nombre</span>
            <p>John</p>
          </div>
          <div className="info__text">
            <span className="font-sm">Apellido</span>
            <p>Doe</p>
          </div>
        </div>
        <div className="info__contact flex">
          <div className="info__text">
            <span className="font-sm">Correo electronico</span>
            <p>emailto@emailto.com</p>
          </div>
          <div className="info__text">
            <span className="font-sm">Telefono</span>
            <p>123-456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
