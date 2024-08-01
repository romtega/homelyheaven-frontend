import "./home.css";

import ChevronBtn from "@/components/ChevronBtn";
import Hero from "@/components/Hero";
import HostFeatures from "@/components/HostFeatures";
import GuestFeatures from "@/components/GuestFeatures";

const Home = () => {
  return (
    <>
      <ChevronBtn />
      <Hero />
      <GuestFeatures />
      <HostFeatures />
    </>
  );
};

export default Home;
