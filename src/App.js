import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/styles/Global";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import SearchView from "./pages/SearchView";

function App() {
  const theme = useSelector((state) => state.theme.themeStyle);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<SearchView />} />

          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
