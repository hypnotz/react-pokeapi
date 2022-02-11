import axios from 'axios';


export const getPokemons = async (offset) => {
    let limitInicial = 25;
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limitInicial}&offset=${offset}`);
        console.log("Response data", response.data)
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export const getInformationPokemon = async (pokeName) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}

export const getExtraInformationPokemon = async (pokeName) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}/`);
        return response.data;
    } catch (error) {
        console.log(error.response);
    }
}