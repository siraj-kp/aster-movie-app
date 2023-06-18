import styled from "styled-components";
import SearchIcon from "../../assets/images/search";

export const NoResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NoResultImage = styled(SearchIcon)`
  width: 120px;
  heigth: 100%;
`;

export const NoResultText = styled.h3`
  font-style: italic;
`;
