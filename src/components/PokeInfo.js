
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Header from "../layout/Header";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getInformationPokemon } from "../services/pokemon.services";
import Paper from '@mui/material/Paper';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const useStyles = makeStyles({
    root: {
        background: "linear-gradient(45deg, #9013FE 15%, #50E3C2 90%)",
        minHeight: "93.3vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },

});

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const PokeInfo = () => {

    const classes = useStyles();
    let urlPokemon = useParams();
    const [expanded, setExpanded] = React.useState(false);
    const [pokemonExtra, setPokemonExtra] = useState([]);
    const [pokeImage, setPokeImage] = useState([]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    useEffect(() => {
        getInfoExtraPoke(urlPokemon.name);
    }, [])

    const getInfoExtraPoke = async (name) => {
        try {
            const res = await getInformationPokemon(name);
            console.log("Result xd ", res.sprites);
            await setPokemonExtra(res);
            await setPokeImage(previousState => [...previousState, res.sprites["front_default"]]);
            await setPokeImage(previousState => [...previousState, res.sprites["back_shiny"]]);
        } catch (ex) {
            console.log(ex);
        }
    }

    useEffect(() => {
        console.log()
    }, [pokeImage])

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
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </ExpandMore>
                    </CardActions>
                </Card>
            </Grid>

        </>
    );
}
export default PokeInfo;