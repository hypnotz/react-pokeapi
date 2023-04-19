import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Container from "@mui/material/Container";
import PokeContent from "./PokeContent";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  header: {
    // Estilos del header
  },
  body: {
    flexGrow: 1, // El body ocupará todo el espacio disponible
    flexShrink: 0, // El body no se reducirá si no hay suficiente espacio
    // Estilos adicionales del body
  },
  footer: {
    // Estilos del footer
  },
}));

const Home = () => {
  const classes = useStyles();
  return (
    <>
      {/* <Header />
      <Container fixed>
        <PokeContent />
      </Container>
      <Footer />
    </> */}

      <div className={classes.root}>
        <header className={classes.header}>
          <Header />
        </header>
        <main className={classes.body}>
          {" "}
          <Container fixed>
            <PokeContent />
          </Container>
        </main>
        {/* <footer className={classes.footer}>
          <Footer />
        </footer> */}
      </div>
    </>
  );
};

export default Home;
