import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovie, getMovies } from "../redux/feature/movieSlice";
import { useParams } from "react-router-dom";
import {
  PosterContainer,
  PosterContent,
  PosterDate,
  PosterOverview,
  PosterTitle,
} from "../components/styles/Movie.style";
import {
  LargeButton,
  MovieCardOverview,
} from "../components/styles/MovieCard.style";

function Movie() {
  const { movie, loading } = useSelector((state) => ({
    ...state.movie,
    ...state.loading,
  }));
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    dispatch(getMovie({ url: `movie/${id}`, params: "language=en-US&page=1" }));
  }, [id]);

  if (loading) {
    return null;
  }

  return (
    <PosterContainer url={movie.poster_path}>
      <PosterContent>
        <PosterTitle>{movie.title}</PosterTitle>
        <PosterTitle fontsize="34px">{movie.tagline}</PosterTitle>
        <PosterDate>Release Date: {movie.release_date}</PosterDate>
        <PosterOverview>{movie.overview}</PosterOverview>
        <LargeButton height="50px">Watch Now</LargeButton>
      </PosterContent>
    </PosterContainer>
  );
}

export default Movie;
