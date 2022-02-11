import React from 'react';
import Header from '../layout/Header';
import Container from "@mui/material/Container";
import PokeContent from './PokeContent';
import ComponentePrueba from './componentePrueba';

const Home = () => {
    return (
        <>
            <Header />
            <Container fixed>
                <PokeContent />
                <ComponentePrueba />
            </Container>
        </>
    )
};

export default Home;
