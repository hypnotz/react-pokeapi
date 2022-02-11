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


const PokeContent = () => {
  const [pokemon, setPokemon] = useState([]);

  const getAllPokemon = async () => {
    try {
      const res = await getPokemons();
      createPokemonList(res);
    } catch (ex) {
      console.log(ex);
    }
  }

  const createPokemonList = (results) => {
    results.map(async x => {
      const res = await getInformationPokemon(x.name);
      setPokemon(list => [...list, res])
    })
  }

  useEffect(() => {

    // console.log("pokemon types ", pokemon[0].types[0].type.name);
  }, [pokemon]);

  useEffect(() => {
    getAllPokemon();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pokemon.map((pokemon, indice) => (
            <Grid item xs={2} sm={4} md={4} key={indice} >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    alt=""
                    src={pokemon.sprites["front_default"]}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pokemon.types[0]?.type.name} {pokemon?.types[1]?.type.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Link to={`/pokemon/${pokemon.name}`}>
                    <Button size="small" color="primary">
                      Mostrar info
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default PokeContent;
