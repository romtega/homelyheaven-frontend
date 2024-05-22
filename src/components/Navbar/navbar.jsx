/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex">
      <div className="navbar__logo font-lg text-primary">
        <a href="#">Logo</a>
      </div>
      <div className="navbar__search">
        <form className="navbar__form flex">
          <input
            className="navbar__input"
            type="text"
            placeholder="Busca un alojamiento"
          />
          <button type="submit" className="navbar__btn">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <ul className="navbar__user flex">
        <li className="navbar__user-action">
          <i className="fa-regular fa-user d-block" title="User Account" />
        </li>
        <li className="navbar__user-action">
          <i className="fa-regular fa-heart d-block" title="Favorites" />
        </li>
        <li className="navbar__user-action">
          <i className="fa-regular fa-envelope d-block" title="Messages" />
        </li>
        <li className="navbar__user-action">
          <i className="fa-regular fa-bell d-block" title="Notifications" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
