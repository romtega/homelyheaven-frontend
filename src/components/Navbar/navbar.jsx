/* eslint-disable multiline-ternary */
import "./navbar.css";
import Logo from "@/assets/logo.jpeg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="section__navbar flex">
      <div className="navbar__logo-wrapper font-lg text-primary">
        <NavLink to="/" end>
          <img className="navbar__logo" src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar__search-wrapper font-base">
        <form className="navbar__form flex">
          <input
            className="navbar__input"
            type="text"
            placeholder="Busca un alojamiento"
          />
          <NavLink to="/housing">
            <button className="navbar__btn bg-primary text-white" type="submit">
              <i className="fa-solid fa-magnifying-glass" />
            </button>
          </NavLink>
        </form>
      </div>
      <ul className="navbar__user flex">
        <NavLink to="/userprofile">
          <li className="navbar__user-icon font-base">
            <i className="fa-solid fa-user d-block" title="User Profile" />
          </li>
        </NavLink>
        <NavLink to="/userprofile">
          <li className="navbar__user-icon font-base">
            <i className="fa-solid fa-bed d-block" title="Bookings" />
          </li>
        </NavLink>
        <NavLink to="/userprofile">
          <li className="navbar__user-icon font-base">
            <i className="fa-solid fa-heart d-block" title="Favorites" />
          </li>
        </NavLink>
        <NavLink to="/userprofile">
          <li className="navbar__user-icon font-base">
            <i className="fa-solid fa-envelope d-block" title="Notifications" />
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="navbar__user-icon font-base">
            <i className="fa-regular fa-user d-block" title="Login" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
