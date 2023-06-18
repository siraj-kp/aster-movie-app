import { takeLatest, put, fork, call } from "redux-saga/effects";
import { getMovie, getMovies, setMovie, setMovies } from "./feature/movieSlice";
import { fetchMovie, fetchMovies } from "./api";

function* onLoadMoviesAsync({ payload }) {
  try {
    const { url, params } = payload;
    const response = yield call(fetchMovies, { url, params });
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovieAsync({ payload }) {
  try {
    const { url, params } = payload;
    const response = yield call(fetchMovie, { url, params });
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];
