import { NavLink, useNavigate } from "react-router-dom";
import { useHousingContext } from "@/hooks/useHousingContext";
import Logo from "@/assets/logo.jpeg";
import "./navbar.css";

const Navbar = () => {
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
          <img className="navbar__logo" src={Logo} alt="" />
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
          <button type="submit" className="navbar__btn bg-primary text-white">
            <NavLink to="/housing">
              <i className="fa-solid fa-magnifying-glass" />
            </NavLink>
          </button>
        </form>
      </div>
      <ul className="navbar__user flex">
        <li className="navbar__user-icon font-base">
          <NavLink to="/login">
            <i className="fa-regular fa-user d-block" title="User Account" />
          </NavLink>
        </li>
        <li className="navbar__user-icon font-base">
          <NavLink to="/login">
            <i className="fa-regular fa-heart d-block" title="Favorites" />
          </NavLink>
        </li>
        <li className="navbar__user-icon font-base">
          <NavLink to="/login">
            <i className="fa-regular fa-envelope d-block" title="Messages" />
          </NavLink>
        </li>
        <li className="navbar__user-icon font-base">
          <NavLink to="/login">
            <i className="fa-regular fa-bell d-block" title="Notifications" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
