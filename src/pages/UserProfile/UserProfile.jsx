/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-curly-newline */
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useUserContext } from "@/hooks/useUserContext";

import "./userprofile.css";
import UserInfo from "@/components/UserInfo";
import UserBookings from "@/components/UserBookings";
import UserFavorites from "@/components/UserFavorites";
import UserNotifications from "@/components/UserNotifications";
import LoginForm from "@/components/LoginForm";

const UserProfile = () => {
  const { isAuth, logout, userPayload } = useAuthContext();
  const { userData } = useUserContext();
  const navigate = useNavigate();
  const currentUser = userData
    ? userData.find((user) => user._id === userPayload.id)
    : null;

  if (!isAuth) {
    return <LoginForm />;
  }

  if (!currentUser) {
    return (
      <div>
        <p>
          Error al cargar los datos del usuario. Por favor, inténtelo
          nuevamente.
        </p>
        <button onClick={() => navigate("/login")}>
          Ir a la página de inicio de sesión
        </button>
      </div>
    );
  }

  return (
    <section className="section__user grid">
      <aside className="user__menu flex font-lg text-gray">
        <NavLink
          to="/user"
          end
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-user" /> Perfil de usuario
        </NavLink>
        <NavLink
          to="/user/bookings"
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-bed" /> Reservaciones
        </NavLink>
        <NavLink
          to="/user/favorites"
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-heart d-block" title="Favorites" />
          Favoritos
        </NavLink>
        <NavLink
          to="/user/notifications"
          className={({ isActive }) =>
            isActive ? "user__category-active flex" : "user__category flex"
          }
        >
          <i className="fa-solid fa-envelope d-block" title="Messages" />
          Notificaciones
        </NavLink>
        <NavLink
          to="/"
          onClick={logout}
          className="user__category flex text-accent"
        >
          <i className="fa-solid fa-right-from-bracket" /> Cerrar sesión
        </NavLink>
      </aside>
      <main className="user__content grid">
        <Routes>
          <Route path="/" element={<UserInfo user={currentUser} />} />
          <Route path="bookings" element={<UserBookings />} />
          <Route path="favorites" element={<UserFavorites />} />
          <Route path="notifications" element={<UserNotifications />} />
        </Routes>
      </main>
    </section>
  );
};

export default UserProfile;
