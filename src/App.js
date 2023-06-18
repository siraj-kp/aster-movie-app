import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import SearchView from "./pages/SearchView";

function App() {
  const query = useSelector((state) => state.search.query);

  const theme = {
    background: {
      wrapper: "linear-gradient(180deg,#16181f,#0f1014 33.33%)",
    },
    color: {
      wrapper: "#e1e6f0",
    },
  };

  // if (query !== "") {
  //   return <Navigate to="/" />;
  // }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/search" element={<SearchView />} />

        <Route path="/movie/:id" element={<Movie />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
