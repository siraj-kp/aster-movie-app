import axios from "axios";

const API_ENDPOINT = `${process.env.REACT_APP_MOVIE_BASE_URL}`;

export const fetchMovies = async (data) =>
  axios.get(
    `${API_ENDPOINT}${data.url}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&${data.params}`
  );

export const fetchMovie = async (data) =>
  axios.get(
    `${API_ENDPOINT}${data.url}?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&${data.params}`
  );
