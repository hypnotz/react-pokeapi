import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";


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
          <Link to={`/`} style={{ textDecoration: 'none', color: 'white' }}>
           POKEDEX API
          </Link>
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
