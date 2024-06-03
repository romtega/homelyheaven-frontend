import UserImg from "@/assets/user.jpg";
import "./userinfo.css";

const UserInfo = ({ user }) => {
  const { username, role, firstName, lastName, email, phone } = user;

  return (
    <div className="user__details flex font-lg">
      <button className="user__edit-icon">
        <i className="fa-regular fa-pen-to-square" />
      </button>
      <div className="user__header flex">
        <div className="user__img-wrapper grid">
          <img src={UserImg} alt="" />
        </div>
        <div>
          <p className="user__username font-2">{username}</p>
          <span className="user__role font-base fw-4 text-primary">{role}</span>
        </div>
      </div>
      <div className="user__summary grid">
        <div className="user__item">
          <span className="user__label font-sm text-gray">Nombre</span>
          <p className="user__info">{firstName}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">Apellido</span>
          <p className="user__info">{lastName}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">
            Correo electronico
          </span>
          <p className="user__info">{email}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">Telefono</span>
          <p className="user__info">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
