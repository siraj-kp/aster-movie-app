import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import { MovieCardContainer } from "../components/styles/MovieCard.style";
import NoResult from "../components/NoResult";

function Home(props) {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const { movieList, loading } = useSelector((state) => ({
    ...state.movie,
    ...state.loading,
  }));

  useEffect(() => {
    dispatch(
      getMovies({ url: "movie/popular", params: "language=en-US&page=1" })
    );
  }, []);

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

export default Home;
