import React, { useEffect } from "react";
import {
  CardImageTitle,
  LargeButton,
  MovieCardImage,
  MovieCardOverview,
  MovieCardSection,
  MovieCardWrapper,
  TextButtonSeperator,
} from "./styles/MovieCard.style";
import { Link } from "react-router-dom";

function MovieCard({ id, poster_path, title, release_date, overview }) {
  return (
    <MovieCardWrapper>
      <MovieCardSection>
        <MovieCardImage
          src={`${process.env.REACT_APP_MOVIE_IMAGE_URL}${poster_path}`}
        />
        <TextButtonSeperator>
          <div>
            <CardImageTitle>{title}</CardImageTitle>
            <MovieCardOverview>Release Date: {release_date}</MovieCardOverview>
            <MovieCardOverview>{overview}</MovieCardOverview>
          </div>
          <Link to={`/movie/${id}`}>
            <LargeButton>Watch Now</LargeButton>
          </Link>
        </TextButtonSeperator>
      </MovieCardSection>
    </MovieCardWrapper>
  );
}

export default MovieCard;
