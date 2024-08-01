/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-curly-newline */
import "./userprofile.css";
import UserInfo from "@/components/UserInfo";
import UserBookings from "@/components/UserBookings";
import UserFavorites from "@/components/UserFavorites";
import UserNotifications from "@/components/UserNotifications";
import LoginForm from "@/components/LoginForm";

const UserProfile = () => {
  return (
    <section className="section__user grid">
      <aside className="user__menu flex font-lg text-gray">
        <UserBookings />
        <UserFavorites />
        <UserNotifications />
      </aside>
      <main className="user__content grid">
        <UserInfo />
      </main>
    </section>
  );
};

export default UserProfile;
