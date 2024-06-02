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
          <NavLink className="navbar__btn bg-primary text-white" to="/housing">
            <i className="fa-solid fa-magnifying-glass" />
          </NavLink>
        </form>
      </div>
      <ul className="navbar__user flex">
        <NavLink to="/login">
          <li className="navbar__user-icon font-base">
            <i className="fa-regular fa-user d-block" title="User Account" />
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="navbar__user-icon font-base">
            <i className="fa-regular fa-heart d-block" title="Favorites" />
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="navbar__user-icon font-base">
            <i className="fa-regular fa-envelope d-block" title="Messages" />
          </li>
        </NavLink>
        <NavLink to="/login">
          <li className="navbar__user-icon font-base">
            <i className="fa-regular fa-bell d-block" title="Notifications" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
