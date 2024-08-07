import UserImg from "@/assets/user.jpg";
import "./userinfo.css";

const UserInfo = ({ loading, user }) => {
  if (loading) return <div>Loading...</div>;
  console.log(user);
  const {
    avatar = UserImg,
    username = "No username",
    role = "No role",
    firstName = "No first name",
    lastName = "No last name",
    email = "No email",
    phoneNumber = "No phone number",
  } = user;
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
          <p className="user__username font-2" />
          <span className="user__role font-base fw-4 text-primary" />
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
          <span className="user__label font-sm text-gray">{email}</span>
          <p className="user__info">johndoe123@wrongway.com</p>
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
