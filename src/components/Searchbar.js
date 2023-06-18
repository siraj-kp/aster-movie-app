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
import { useNavigate } from "react-router-dom";
import { setSearchMovies } from "../redux/feature/searchSlice";

function Searchbar() {
  const query = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    dispatch(setSearchMovies(e.target.value));
  };

  const handleClose = (e) => {
    e.preventDefault();

    dispatch(setSearchMovies(""));
    navigate(-1);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <SearchContainer>
      <FormContainer onSubmit={searchMovie}>
        <SearchInput
          name="query"
          value={query}
          onChange={handleChange}
          autoComplete="off"
        />
        {query !== "" && (
          <CloseButton type="button" onClick={handleClose}></CloseButton>
        )}
        <SearchButton type="submit">Search</SearchButton>
      </FormContainer>
    </SearchContainer>
  );
}

export default Searchbar;
