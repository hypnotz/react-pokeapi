import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Container from "@mui/material/Container";
import PokeContent from "./PokeContent";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     minHeight: "100vh",
//   },
//   header: {
//     // Estilos del header
//   },
//   body: {
//     flexGrow: 1, // El body ocupará todo el espacio disponible
//     flexShrink: 0, // El body no se reducirá si no hay suficiente espacio
//     // Estilos adicionales del body
//   },
//   footer: {
//     // Estilos del footer
//   },
// }));


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    marginTop: 'auto',
  },
}));



const Home = () => {
 const classes = useStyles();
  return (
    <>

    <div className={classes.root}>
      <AppBar position="static">
       <Header />
      </AppBar>
      <main className={classes.content}>
      <Container fixed>
            <PokeContent />
          </Container>
      </main>
      <footer className={classes.footer}>
      <Footer />
      </footer>
    </div>

    </>
  );
};

export default Home;
