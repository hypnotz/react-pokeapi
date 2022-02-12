import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { getPokemons, getInformationPokemon } from "../services/pokemon.services";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

const PokeContent = () => {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonFiltrado, setPokemonFiltrado] = useState([]);
  const [errorBusqueda, setErrorBusqueda] = useState(false);
  const [countOffSet, setCountOffSet] = useState(0);
  const [pages, setPages] = useState(0);
  const [nextPage, setNextPage] = useState(1);

  const getAllPokemon = async () => {
    setPokemon([]);
    setErrorBusqueda(false);
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
      setErrorBusqueda(true);
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
      {errorBusqueda ?
        <h1>El pokemon no existe</h1>
        : null}
      {pokemonFiltrado.length !== 0 ?
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 2, lg: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={6} sm={6} md={2} >
              <Card sx={{ maxWidth: 320 }}>
                <CardActionArea>
                  <Grid style={{ color: 'white', backgroundColor: '#e91e63', textAlign: 'center' }}>
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
                    style={{ backgroundColor: '#10C1AB' }}
                  />
                  <CardContent >
                    <Typography variant="body1" >
                      Tipo: {pokemonFiltrado?.types[0]?.type.name} {pokemonFiltrado?.types[1]?.type.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Grid >
                  <Grid>
                    <CardActions>
                      <Link to={`/pokemon/${pokemonFiltrado?.name}`} style={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="small" >
                          INFORMACION EXTRA
                        </Button>
                      </Link>
                    </CardActions></Grid>
                </Grid>
              </Card>
            </Grid>
          </Grid>
        </Box>
        : null}
      {pokemon.length > 1 ? <>


        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 2, lg: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {pokemon?.map((pokemon, indice) => (
              <Grid item xs={6} sm={6} md={2} key={indice} >
                <Card sx={{ maxWidth: 320 }}>
                  <CardActionArea>
                    <Grid style={{ color: 'white', backgroundColor: '#e91e63', textAlign: 'center' }}>
                      <Typography gutterBottom variant="body1" component="div">
                        ID {pokemon?.id} / {pokemon?.name}
                      </Typography>
                    </Grid>
                    <CardMedia
                      component="img"
                      height="150"
                      width="900"
                      alt=""
                      src={pokemon?.sprites["front_default"]}
                      style={{ backgroundColor: '#10C1AB' }}
                    />
                    <CardContent >
                      <Typography variant="body1" >
                        Tipo: {pokemon?.types[0]?.type.name} {pokemon?.types[1]?.type.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Grid >
                    <Grid>
                      <CardActions>
                        <Link to={`/pokemon/${pokemon?.name}`} style={{ textDecoration: 'none' }}>
                          <Button variant="contained" size="small" >
                            INFORMACION EXTRA
                          </Button>
                        </Link>
                      </CardActions></Grid>

                  </Grid>

                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>  </> : null}
      <Grid>
        <Grid xs={6} item sx={{ m: 2 }}>
          {nextPage <= pages ?
            <Button variant="contained" size="small"
              onClick={() => {
                setCountOffSet(countOffSet + 25);
                setNextPage(nextPage + 1);
              }}>
              Página Siguiente</Button> : <></>}
        </Grid>
        <Grid xs={6} item sx={{ m: 2 }}>
          {nextPage > 1 ?
            <Button variant="contained" size="small"
              onClick={() => {
                setCountOffSet(countOffSet - 25);
                setNextPage(nextPage - 1);
              }}>Página Anterior</Button> : <></>}
        </Grid>
      </Grid>

    </>
  );
};

export default PokeContent;
