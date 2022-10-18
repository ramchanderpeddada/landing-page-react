import React from "react";
import Articles from "../../Components/articles/Articles";
import Hero from "../../Components/hero/Hero";
import Info from "../../Components/info/Info";
import { HomeContainer } from "./Home.style";
const Home = () => {
  return (
    <>
      <HomeContainer>
        <Hero />
        <Info />
        <Articles />
      </HomeContainer>
    </>
  );
};

export default Home;
