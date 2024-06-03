/* eslint-disable multiline-ternary */
import { NavLink, useNavigate } from "react-router-dom";
import { useHousingContext } from "@/hooks/useHousingContext";
import { useAuthContext } from "@/hooks/useAuthContext";

import Logo from "@/assets/logo.jpeg";
import "./navbar.css";

const Navbar = () => {
  const { isAuth } = useAuthContext();
  const { searchTerm, setSearchTerm } = useHousingContext();
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/housing");
  };

  return (
    <nav className="section__navbar flex">
      <div className="navbar__logo-wrapper font-lg text-primary">
        <NavLink to="/">
          <img className="navbar__logo" src={Logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar__search-wrapper font-base">
        <form className="navbar__form flex" onSubmit={handleSearchSubmit}>
          <input
            className="navbar__input"
            type="text"
            placeholder="Busca un alojamiento"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="navbar__btn bg-primary text-white" type="submit">
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </form>
      </div>
      <ul className="navbar__user flex">
        {isAuth ? (
          <>
            <NavLink to="/user">
              <li className="navbar__user-icon font-base">
                <i className="fa-solid fa-user d-block" title="User Profile" />
              </li>
            </NavLink>
            <NavLink to="/user/bookings">
              <li className="navbar__user-icon font-base">
                <i className="fa-solid fa-bed d-block" title="Bookings" />
              </li>
            </NavLink>
            <NavLink to="/user/favorites">
              <li className="navbar__user-icon font-base">
                <i className="fa-solid fa-heart d-block" title="Favorites" />
              </li>
            </NavLink>
            <NavLink to="/user/notifications">
              <li className="navbar__user-icon font-base">
                <i
                  className="fa-solid fa-envelope d-block"
                  title="Notifications"
                />
              </li>
            </NavLink>
          </>
        ) : (
          <NavLink to="/login">
            <li className="navbar__user-icon font-base">
              <i className="fa-regular fa-user d-block" title="Favorites" />
            </li>
          </NavLink>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
