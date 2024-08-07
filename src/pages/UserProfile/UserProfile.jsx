import { NavLink, Routes, Route } from "react-router-dom";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useUserContext } from "@/hooks/useUserContext";

import "./userprofile.css";
import UserInfo from "@/components/UserInfo";
import UserBookings from "@/components/UserBookings";
import UserFavorites from "@/components/UserFavorites";
import UserNotifications from "@/components/UserNotifications";

const UserProfile = () => {
  const { userPayload, logout } = useAuthContext();
  const { userData, loading } = useUserContext();
  const currentUser = userData.find((user) => user._id === userPayload?.id);

  if (!userPayload) return <div>User not authenticated</div>;

  return (
    <section className="section__user grid">
      <aside className="user__menu flex font-lg text-gray">
        <NavLink
          to="/user/profile"
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
          <Route
            path="profile"
            element={<UserInfo loading={loading} user={currentUser} />}
          />
          <Route
            path="bookings"
            element={<UserBookings loading={loading} user={currentUser} />}
          />
          <Route
            path="favorites"
            element={<UserFavorites loading={loading} user={currentUser} />}
          />
          <Route
            path="notifications"
            element={<UserNotifications loading={loading} user={currentUser} />}
          />
        </Routes>
      </main>
    </section>
  );
};

export default UserProfile;
