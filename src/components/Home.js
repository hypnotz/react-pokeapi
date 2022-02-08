import React from 'react';
import Header from '../layout/Header';
import SearchPokemon from './SearchPokemon';
import Container from "@mui/material/Container";
import PokeContent from './PokeContent';
import ComponentePrueba from './componentePrueba';

const Home = () => {
 return(
     <>
     <Header />
     <Container fixed>
     <SearchPokemon />
     <PokeContent />
     <ComponentePrueba />
     </Container>
     </>
 )
};

export default Home;
