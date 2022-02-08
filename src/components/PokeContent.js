import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

const PokeContent = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={2} sm={4} md={4} >
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              alt="green iguana"
              src="https://pbs.twimg.com/profile_images/1229609721260232705/oT07arOT_400x400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
               PRUEBA MAQUETEO
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
          <Grid item xs={2} sm={4} md={4} >
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              alt="green iguana"
              src="https://pbs.twimg.com/profile_images/1229609721260232705/oT07arOT_400x400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              PRUEBA MAQUETEO
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
          <Grid item xs={2} sm={4} md={4} >
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              alt="green iguana"
              src="https://pbs.twimg.com/profile_images/1229609721260232705/oT07arOT_400x400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              PRUEBA MAQUETEO
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
          <Grid item xs={2} sm={4} md={4} >
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              alt="green iguana"
              src="https://pbs.twimg.com/profile_images/1229609721260232705/oT07arOT_400x400.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
              PRUEBA MAQUETEO
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
          
         
          
      </Grid>
    </Box>
          


    </>
  );
};

export default PokeContent;
