import styled from "styled-components";
import Logo from "../../assets/images/logo";
import LogoBlack from "../../assets/images/logoBlack";
import MoonIcon from "../../assets/images/moon";
import SunIcon from "../../assets/images/sun";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 80px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-start;
  height: 100%;
`;

export const RightContainer = styled.div`
  flex: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 5%;
  height: 100%;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  height: auto;
  width: 100%;
`;

export const LogoImage = styled(Logo)`
  height: 100%;
  width: 125px;
`;

export const LogoImageBlack = styled(LogoBlack)`
  height: 100%;
  width: 125px;
`;

export const MoonImage = styled(MoonIcon)`
  height: 25px;
  width: 25px;
  margin-left: 20px;
  cursor: pointer;
`;

export const SunImage = styled(SunIcon)`
  height: 30px;
  width: 30px;
  margin-left: 20px;
  cursor: pointer;
`;

export const EmptyButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
`;

export const LogoImageTitle = styled.h4`
  margin: 0;
  color: ${({ theme }) => theme.color.wrapper};
`;

export const NavbarExtendedContainer = styled.div``;
