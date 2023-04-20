import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Loading from "../layout/Loading";
import {
  getPokemons,
  getInformationPokemon,
} from "../services/pokemon.services";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const PokeContent = () => {
  const totalPokemones = 18;
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFiltrado, setPokemonFiltrado] = useState([]);
  const [errorBusqueda, setErrorBusqueda] = useState(false);
  const [countOffSet, setCountOffSet] = useState(0);
  const [pages, setPages] = useState(0);
  const [nextPage, setNextPage] = useState(1);
  const [visiblePaginador, setVisiblePaginador] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getAllPokemon = async () => {
    setPokemon([]);
    setErrorBusqueda(false);
    setPokemonFiltrado([]);
    try {
      setIsLoading(true);
      setVisiblePaginador(false);

      setTimeout(async () => {
        const res = await getPokemons(countOffSet);
        createPokemonList(res.results);
        setPages(Math.ceil(res.count / totalPokemones));
      }, 500);
    } catch (ex) {
      console.log(ex);
    }
  };

  const createPokemonList = (results) => {
    setPokemon([]);
    results.map(async (x) => {
      const res = await getInformationPokemon(x.name);
      setPokemon((list) => [...list, res]);
    });
    setIsLoading(false);
    setVisiblePaginador(true);
    console.log("Next page ", nextPage);
  };
  useEffect(() => {
    getAllPokemon(countOffSet);
  }, [countOffSet]);

  const handleChange = async (event) => {
    const res = await getInformationPokemon(event.target.value.toLowerCase());
    if (res === undefined) {
      setPokemon([]);
      setPokemonFiltrado([]);
      setErrorBusqueda(true);
    } else {
      setErrorBusqueda("");
      setPokemon([]);
      setPokemonFiltrado(res);
    }
  };

  return (
    <>
      {isLoading === false ? <></> : null}
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <Input
          color="secondary"
          id="standard-adornment-amount"
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              {
                if (event.target.value.length > 0) {
                  handleChange(event);
                } else {
                  getAllPokemon();
                }
              }
            }
          }}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      {isLoading ? (
        <>
          <Loading />
        </>
      ) : null}

      {errorBusqueda ? <h1>El pokemon no existe</h1> : null}
      {pokemonFiltrado.length !== 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 2, lg: 2 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={6} sm={6} md={2}>
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                  <Grid
                    style={{
                      color: "white",
                      backgroundColor: "#e91e63",
                      textAlign: "center",
                    }}
                  >
                    <Typography gutterBottom variant="body1" component="div">
                      ID {pokemonFiltrado?.id} / {pokemonFiltrado?.name}
                    </Typography>
                  </Grid>
                  <CardMedia
                    component="img"
                    height="150"
                    width="900"
                    alt=""
                    src={pokemonFiltrado?.sprites["front_default"]}
                    style={{ backgroundColor: "#10C1AB" }}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      Tipo: {pokemonFiltrado?.types[0]?.type.name}{" "}
                      {pokemonFiltrado?.types[1]?.type.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Grid>
                  <Grid>
                    <CardActions>
                      <Link
                        to={`/pokemon/${pokemonFiltrado?.name}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button variant="contained" size="small">
                          INFORMACION EXTRA
                        </Button>
                      </Link>
                    </CardActions>
                  </Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
      ) : null}
      {pokemon.length > 1 ? (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 1, lg: 2 }}
              columns={{ xs: 4, sm: 12, md: 12 }}
            >
              {pokemon?.map((pokemon, indice) => (
                <Grid item xs={2} sm={6} md={2} key={indice}>
                  <Card sx={{ maxWidth: 320 }}>
                    <CardActionArea>
                      <Grid
                        style={{
                          color: "white",
                          backgroundColor: "#e91e63",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          component="h6"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          ID {pokemon?.id} | {pokemon?.name}
                        </Typography>
                      </Grid>
                      <CardMedia
                        component="img"
                        height="150"
                        width="900"
                        alt=""
                        src={pokemon?.sprites["front_default"]}
                        style={{ backgroundColor: "#10C1AB" }}
                      />
                      <CardContent>
                        <Typography variant="body1">
                          Tipo: {pokemon?.types[0]?.type.name}{" "}
                          {pokemon?.types[1]?.type.name}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <Grid>
                      <Grid>
                        <CardActions>
                          <Link
                            to={`/pokemon/${pokemon?.name}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Button variant="contained" size="small">
                              INFORMACION EXTRA
                            </Button>
                          </Link>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>{" "}
        </>
      ) : null}

      <Box>
        <Grid container sx={{ pt: 2 }} spacing={2}>
          <Grid item xs={6}>
            {nextPage > 1 ? (
              <>
                {visiblePaginador ? (
                  <>
                    <Button
                      variant="contained"
                      size="small"
                      onClick={() => {
                        setCountOffSet(countOffSet - totalPokemones);
                        setNextPage(nextPage - 1);
                      }}
                    >
                      Página Atras
                    </Button>
                  </>
                ) : null}
              </>
            ) : (
              <></>
            )}
          </Grid>
          <Grid item xs={6}>
            <Box display="flex" justifyContent="flex-end">
              {nextPage <= pages ? (
                <>
                  {visiblePaginador ? (
                    <>
                      <Button
                        variant="contained"
                        size="small"
                        onClick={() => {
                          setCountOffSet(countOffSet + totalPokemones);
                          setNextPage(nextPage + 1);
                        }}
                      >
                        Página Siguiente
                      </Button>
                    </>
                  ) : null}
                </>
              ) : (
                <></>
              )}
            </Box>
            <></>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PokeContent;
