import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Container from "@mui/material/Container";
import PokeContent from "./PokeContent";

const Home = () => {
  return (
    <>
      <Header />
      <Container fixed>
        <PokeContent />
      </Container>
      <Footer />
    </>
  );
};

export default Home;
