import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { getPokemons, getInformationPokemon } from "../services/pokemon.services";
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom";

import { useState, useEffect } from "react";


import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";


const PokeContent = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFiltrado, setPokemonFiltrado] = useState([]);
  const [errorBusqueda, setErrorBusqueda] = useState("");
  const [countOffSet, setCountOffSet] = useState(0);
  const [pages, setPages] = useState(0);
  const [nextPage, setNextPage] = useState(1);


  const getAllPokemon = async () => {
    setPokemon([]);
    setErrorBusqueda("");
    setPokemonFiltrado([]);
    try {
      const res = await getPokemons(countOffSet);
      createPokemonList(res.results);
      setPages(Math.ceil(res.count / 25));
    } catch (ex) {
      console.log(ex);
    }
  }

  const createPokemonList = (results) => {
    results.map(async x => {
      const res = await getInformationPokemon(x.name);
      setPokemon(list => [...list, res]);
      console.log("restful ", res);

    })
  }
  useEffect(() => {
    getAllPokemon(countOffSet);
  }, [countOffSet]);


  const handleChange = async (event) => {
    const res = await getInformationPokemon(event.target.value.toLowerCase());
    if (res === undefined) {
      setPokemon([]);
      setPokemonFiltrado([]);
      setErrorBusqueda("No hay pokemones para mostrar");
    } else {
      setErrorBusqueda("");
      setPokemon([]);
      setPokemonFiltrado(res);
    }
  };

  return (
    <>
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
        <Input
          id="standard-adornment-amount"
          onKeyPress={event => {
            if (event.key === 'Enter') {
              {
                if (event.target.value.length > 0) {
                  handleChange(event)
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
      {errorBusqueda.length > 1 ? <h1>No hay pokemones para mostrar</h1> : null}
      {pokemonFiltrado.length !== 0 ?
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    alt=""
                    src={pokemonFiltrado?.sprites["front_default"]}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pokemonFiltrado?.id} {pokemonFiltrado?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pokemonFiltrado?.types[0]?.type.name} {pokemonFiltrado?.types[1]?.type.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/pokemon/${pokemonFiltrado?.name}`}>
                    <Button size="small" color="primary">
                      MOSTRAR INFO ADICIONAL
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
        : null}
      {pokemon.length > 1 ? <> <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {pokemon?.map((pokemon, indice) => (
              <Grid item xs={2} sm={4} md={4} key={indice} >
                <Card sx={{ maxWidth: 250 }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      alt=""
                      src={pokemon?.sprites["front_default"]}
                    />
                    <CardContent >
                      <Typography gutterBottom variant="h5" component="div">
                        {pokemon?.id}
                      </Typography>
                      <Typography gutterBottom variant="h5" component="div">
                        {pokemon?.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {pokemon?.types[0]?.type.name} {pokemon?.types[1]?.type.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={`/pokemon/${pokemon?.name}`}>
                      <Button size="small" color="primary">
                        MOSTRAR INFO ADICIONAL
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>  </> : null}
      {nextPage <= pages ? <Button onClick={() => { setCountOffSet(countOffSet + 25); setNextPage(nextPage + 1); }}>Página Siguiente</Button> : <h1>Paginacionxd</h1>}
      {nextPage > 1 ? <Button onClick={() => { setCountOffSet(countOffSet - 25); setNextPage(nextPage - 1); }}>Página Atras</Button> : <></>}
    </>
  );
};

export default PokeContent;
