/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable jsx-quotes */
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar flex">
      <div className="navbar__logo font-lg text-primary">
        <NavLink to="/">Logo</NavLink>
      </div>
      <div className="navbar__search">
        <form className="navbar__form flex">
          <input
            className="navbar__input"
            type="text"
            placeholder="Busca un alojamiento"
          />
          <button type="submit" className="navbar__btn">
            <NavLink to="/housing">
              <i className="fa-solid fa-magnifying-glass" />
            </NavLink>
          </button>
        </form>
      </div>
      <ul className="navbar__user flex">
        <li className="navbar__user-action">
          <NavLink to="/user">
            <i className="fa-regular fa-user d-block" title="User Account" />
          </NavLink>
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
