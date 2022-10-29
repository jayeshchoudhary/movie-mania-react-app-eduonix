import axios from "axios";

// Make sure you add your own API key here
const API_KEY = "3433ff5";
const BASE_URL = `https://www.omdbapi.com/?apiKey=${API_KEY}`;

export const getMovieSearchResult = async (searchValue) => {
    const result = await axios.get(`${BASE_URL}&s=${searchValue}`);

    return result.data;
};

export const getMovieDetails = async (movieId) => {
    const result = await axios.get(`${BASE_URL}&i=${movieId}&plot=full`);

    return result.data;
};
