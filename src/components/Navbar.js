import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";
import {
  LeftContainer,
  NavbarContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  RightContainer,
  LogoImage,
  LogoContainer,
  LogoImageTitle,
  MoonImage,
  EmptyButton,
  SunImage,
  LogoImageBlack,
} from "./styles/Navbar.style";
import { useDispatch, useSelector } from "react-redux";
import { setDark, setTheme } from "../redux/feature/themeSlice";

function Navbar() {
  const dispatch = useDispatch();

  const dark = useSelector((state) => state.theme.dark);
  const theme = useSelector((state) => state.theme.themeStyle);

  const handleTheme = () => {
    if (dark) {
      dispatch(
        setTheme({
          background: {
            wrapper: "#fff",
            searchContainer: "#D3D3D3",
            SearchButton: "#808080",
            MovieCard: "#D3D3D3",
          },
          color: {
            wrapper: "#000",
          },
        })
      );
      dispatch(setDark(false));
    } else {
      dispatch(
        setTheme({
          background: {
            wrapper: "linear-gradient(180deg,#16181f,#0f1014 33.33%)",
            searchContainer: "#252846",
            SearchButton: "#000",
            MovieCard: "#16181f",
          },
          color: {
            wrapper: "#e1e6f0",
          },
        })
      );
      dispatch(setDark(true));
    }
  };

  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link to={"/"}>
            <LogoContainer>
              {dark ? <LogoImage /> : <LogoImageBlack />}
              <LogoImageTitle>My Movie App</LogoImageTitle>
            </LogoContainer>
          </Link>
        </LeftContainer>
        <RightContainer>
          <Searchbar />
          <EmptyButton onClick={handleTheme}>
            {dark ? <MoonImage /> : <SunImage />}
          </EmptyButton>
        </RightContainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}

export default Navbar;
