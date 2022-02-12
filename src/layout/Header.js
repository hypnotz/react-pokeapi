import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";


const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEDEX
          </Typography>
          <Box
            component="img"
            sx={{
              height: 60,
              width: 60,
            }}
            alt="pokeImagen"
            src="https://www.pngplay.com/wp-content/uploads/2/Pokeball-PNG-Photo-Image.png"
          />


        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
