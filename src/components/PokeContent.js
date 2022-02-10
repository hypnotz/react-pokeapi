import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { getPokemons, getInformationPokemon } from "../services/pokemon.services";

import { useState, useEffect } from "react";




const PokeContent = () => {
  const [pokemon, setPokemon] = useState([]);


  useEffect(() => {
    (async () => {
      try {
        const response = await Promise.all([
          getPokemons()
        ]);
        setPokemon(response[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pokemon.map((pokemon) => (
            <Grid item xs={2} sm={4} md={4} key={pokemon.name} >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    alt=""
                    src=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {pokemon.url}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Mostrar info
                  </Button>
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
