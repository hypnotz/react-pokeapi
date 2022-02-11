import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Header from "../layout/Header";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getInformationPokemon } from "../services/pokemon.services";
import Paper from '@mui/material/Paper';

const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
        minHeight: "93.3vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

});

const PokeInfo = () => {
    const classes = useStyles();
    let urlPokemon = useParams();
    const [expanded, setExpanded] = React.useState(false);
    const [pokemonExtra, setPokemonExtra] = useState([]);
    const [pokeImage, setPokeImage] = useState([]);
    const [pokeAbility, setPokeAbility] = useState([]);
    

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        getInfoExtraPoke(urlPokemon.name);
    }, [])

    const getInfoExtraPoke = async (name) => {
        try {
            const res = await getInformationPokemon(name);
            console.log("Result xd ", res);
            setPokemonExtra(res);
            setPokeImage(previousState => [...previousState, res.sprites["front_default"]]);
            setPokeImage(previousState => [...previousState, res.sprites["back_default"]]);
            setPokeAbility(previousState => [...previousState, res.abilities[0].ability.name]);
            // await setPokeAbility(previousState => [...previousState, res.ability.name])
            console.log("Habilidad ", res.abilities[0].ability.name);
            return;
        } catch (ex) {
            console.log(ex);
        }
    }

    return (
        <>
            <Header />
            <Grid container
                className={classes.root}
                spacing={0}
                alignItems="center"
                justify="center"
            >
                <Card sx={{ maxWidth: 345 }}>
                    <CardHeader
                        title={pokemonExtra.name}
                    />
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={pokeImage[0]}
                                alt="Paella dish"
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={pokeImage[1]}
                                alt="Paella dish"
                            />
                        </Grid>
                    </Grid>
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            ID: {pokemonExtra.id}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Altura: {pokemonExtra.height}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Anchura: {pokemonExtra.weight}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Clasificación: {pokemonExtra.order}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Habilidad principal: {pokeAbility}
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                    </CardActions>
                </Card>
            </Grid>
        </>
    );
}
export default PokeInfo;