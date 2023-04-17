import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const Footer = () => {
    return (
        <footer>
            <Box
                px={{ xs: 1, sm: 1 }}
                py={{ xs: 1, sm: 1 }}
                bgcolor="text.secondary"
                color="white"
            >
                <Grid style={{textAlign:'center'}}>
                    Desarrollada en React
                </Grid>
            </Box>
        </footer>
    );
}

export default Footer;