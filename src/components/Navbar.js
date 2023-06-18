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
} from "./styles/Navbar.style";

function Navbar() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftContainer>
          <Link to={"/"}>
            <LogoContainer>
              <LogoImage />
              <LogoImageTitle>My Movie App</LogoImageTitle>
            </LogoContainer>
          </Link>
        </LeftContainer>
        <RightContainer>
          <Searchbar />
        </RightContainer>
      </NavbarInnerContainer>
      <NavbarExtendedContainer></NavbarExtendedContainer>
    </NavbarContainer>
  );
}

export default Navbar;
