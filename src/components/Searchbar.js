import { useState } from "react";
import {
  CloseButton,
  FormContainer,
  SearchButton,
  SearchContainer,
  SearchInput,
} from "./styles/Searchbar.style";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../redux/feature/movieSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { setSearchMovies } from "../redux/feature/searchSlice";

function Searchbar() {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    dispatch(setSearchMovies(e.target.value));
  };

  const handleClose = () => {
    dispatch(setSearchMovies(""));
    if (location.pathname === "/search") {
      navigate(-1);
    }
  };

  const searchMovie = () => {
    navigate("/search");
  };

  return (
    <SearchContainer>
      <SearchInput
        name="query"
        value={query}
        onChange={handleChange}
        autoComplete="off"
      />
      {query !== "" && (
        <CloseButton type="button" onClick={handleClose}></CloseButton>
      )}
      <SearchButton type="button" onClick={searchMovie}>
        Search
      </SearchButton>
    </SearchContainer>
  );
}

export default Searchbar;
