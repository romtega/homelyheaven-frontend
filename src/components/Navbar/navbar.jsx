import { NavLink } from "react-router-dom";
import Logo from "@/assets/logo.jpeg";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="section__navbar flex">
      <div className="navbar__logo-wrapper font-lg text-primary">
        <NavLink to="/">
          <img className="navbar__logo" src={Logo} alt="" />
        </NavLink>
      </div>
      <div className="navbar__search-wrapper font-base">
        <form className="navbar__form flex">
          <input
            className="navbar__input"
            type="text"
            placeholder="Busca un alojamiento"
          />
          <button type="submit" className="navbar__btn bg-primary text-white">
            <NavLink to="/housing">
              <i className="fa-solid fa-magnifying-glass" />
            </NavLink>
          </button>
        </form>
      </div>
      <ul className="navbar__user flex">
        <li className="navbar__user-icon font-base">
          <NavLink to="/user">
            <i className="fa-regular fa-user d-block" title="User Account" />
          </NavLink>
        </li>
        <li className="navbar__user-icon font-base">
          <i className="fa-regular fa-heart d-block" title="Favorites" />
        </li>
        <li className="navbar__user-icon font-base">
          <i className="fa-regular fa-envelope d-block" title="Messages" />
        </li>
        <li className="navbar__user-icon font-base">
          <i className="fa-regular fa-bell d-block" title="Notifications" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
