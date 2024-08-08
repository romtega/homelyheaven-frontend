import UserImg from "@/assets/user.jpg";
import "./userinfo.css";
import LoadingSpinner from "@/components/LoadingSpinner";

const UserInfo = ({ loading, user }) => {
  if (loading) return <LoadingSpinner />;

  const {
    username = "No username",
    role = "No role",
    firstName = "No first name",
    lastName = "No last name",
    email = "No email",
    phoneNumber = "No phone number",
  } = user || {};

  return (
    <div className="user__details flex font-lg">
      <button className="user__edit-icon">
        <i className="fa-regular fa-pen-to-square" />
      </button>
      <div className="user__header flex">
        <div className="user__img-wrapper grid">
          <img src={UserImg} alt="User" />
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
          <span className="user__label font-sm text-gray">Email</span>
          <p className="user__info">{email}</p>
        </div>
        <div className="user__item">
          <span className="user__label font-sm text-gray">Telefono</span>
          <p className="user__info">{phoneNumber}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
