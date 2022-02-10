import axios from 'axios';


export const getPokemons = async () => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=25&offset=200');
       
        return response.data.results;
    } catch (error) {
        console.log(error.response);
    }
}


export const getInformationPokemon = async (pokeName) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
        console.log("response pokemon data ", response);
        return response;
    } catch (error) {
        console.log(error.response);
    }
} 