import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";
import { MovieCardContainer } from "../components/styles/MovieCard.style";
import MovieCard from "../components/MovieCard";
import NoResult from "../components/NoResult";

function SearchView() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const { movieList, loading } = useSelector((state) => ({
    ...state.movie,
    ...state.loading,
  }));

  useEffect(() => {
    const params = `include_adult=false&language=en-US&page=1&query=${query}`;
    dispatch(getMovies({ url: "search/movie", params: params }));
  }, [query]);

  if (loading) {
    return null;
  }

  return (
    <div>
      {movieList && movieList?.results?.length > 0 ? (
        <MovieCardContainer>
          {movieList?.results.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster_path={item.poster_path}
              title={item.title}
              release_date={item.release_date}
              overview={item.overview}
            />
          ))}
        </MovieCardContainer>
      ) : (
        <NoResult />
      )}
    </div>
  );
}

export default SearchView;
