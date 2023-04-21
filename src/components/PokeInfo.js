import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getInformationPokemon } from "../services/pokemon.services";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { AppBar } from "@mui/material";
import Container from "@mui/material/Container"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "78vh",
    
    justifyContent: "center",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  footer: {
    marginTop: "auto",
  },
}));

const style = {
 
};

const PokeInfo = () => {
  const classes = useStyles();
  let urlPokemon = useParams();
  const [pokemonExtra, setPokemonExtra] = useState([]);
  const [pokeImage, setPokeImage] = useState([]);
  const [pokeAbility, setPokeAbility] = useState([]);
  const [pokeStats, setPokeStats] = useState([]);

  useEffect(() => {
    getInfoExtraPoke(urlPokemon.name);
  }, []);

  const getInfoExtraPoke = async (name) => {
    try {
      const res = await getInformationPokemon(name);
      setPokemonExtra(res);
      setPokeImage((previousState) => [
        ...previousState,
        res.sprites["front_default"],
      ]);
      setPokeImage((previousState) => [
        ...previousState,
        res.sprites["back_default"],
      ]);
      setPokeAbility((previousState) => [
        ...previousState,
        res.abilities[0].ability.name,
      ]);
      setPokeStats((previousState) => [
        ...previousState,
        res.stats[1].stat.name,
        res.stats[1].base_stat,
        res.stats[2].stat.name,
        res.stats[2].base_stat,
      ]);
      return;
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <>
      {/* <Header /> */}

      <div className={classes.root}>
        <AppBar position="static">
          <Header />
        </AppBar>
        <main className={classes.content}>
        <Container fixed>
        <Grid
            container
            className={classes.root}
            spacing={0}
            alignItems="center"
            justify="center"
          >
            <Card sx={{ maxWidth: 345 }}>
              <Grid
                style={{
                  color: "white",
                  backgroundColor: "#e91e63",
                  textAlign: "center",
                }}
              >
                <CardHeader
                  title={"ID " + pokemonExtra?.id + " / " + pokemonExtra.name}
                />
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pokeImage[0]}
                    alt="Paella dish"
                  />
                </Grid>
                <Grid item xs={6}>
                  <CardMedia
                    component="img"
                    height="140"
                    image={pokeImage[1]}
                    alt="Paella dish"
                  />
                </Grid>
              </Grid>
              <CardContent>
                <Grid>
                  <List sx={style} component="nav" aria-label="mailbox folders">
                    <Divider />
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Habilidad principal: {pokeAbility}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Clasificación: {pokemonExtra.order}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Experiencia base: {pokemonExtra.base_experience}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Ataque: {pokeStats[1]}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Defensa: {pokeStats[3]}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Altura: {pokemonExtra.height}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Anchura: {pokemonExtra.weight}
                      </Typography>
                    </ListItem>
                    <ListItem divider>
                      <Typography variant="body1" color="text.secondary">
                        Experiencia base: {pokemonExtra.base_experience}
                      </Typography>
                    </ListItem>
                    <Divider light />
                  </List>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          </Container>
         
        </main>
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </>
  );
};
export default PokeInfo;
