import UserImg from "@/assets/user.jpg";
import "./userprofile.css";
const UserProfile = () => {
  return (
    <section className="section__user grid">
      <aside className="user__menu flex font-lg text-gray">
        <div className="user__category flex">
          <i className="fa-solid fa-user" /> Perfil de usuario
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
        <div className="user__category flex text-accent">
          <i className="fa-solid fa-right-from-bracket" />
          Cerrar sesion
        </div>
      </aside>
      <div className="user__details flex font-lg">
        <button className="user__edit-icon">
          <i className="fa-regular fa-pen-to-square" />
        </button>
        <div className="user__header flex">
          <div className="user__img-wrapper grid">
            <img src={UserImg} alt="" />
          </div>
          <div>
            <p className="user__username font-1">username123</p>
            <span className="user__role font-base fw-4 text-primary">
              Anfitrion
            </span>
          </div>
        </div>
        <div className="user__summary grid">
          <div className="user__item">
            <span className="user__label font-sm text-gray">Nombre</span>
            <p className="user__info">John</p>
          </div>
          <div className="user__item">
            <span className="user__label font-sm text-gray">Apellido</span>
            <p className="user__info">Doe</p>
          </div>
          <div className="user__item">
            <span className="user__label font-sm text-gray">
              Correo electronico
            </span>
            <p className="user__info">emailto@emailto.com</p>
          </div>
          <div className="user__item">
            <span className="user__label font-sm text-gray">Telefono</span>
            <p className="user__info">123-456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
