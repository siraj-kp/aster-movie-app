import styled from "styled-components";

export const MovieCardContainer = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas: "MovieCardWrapper MovieCardWrapper MovieCardWrapper MovieCardWrapper";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  margin: 50px 15px;

  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 0.5fr;
    grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
    grid-template-areas: "MovieCardWrapper MovieCardWrapper";
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas: "MovieCardWrapper";
  }
`;

export const MovieCardWrapper = styled.div`
  background: ${({ theme }) => theme.background.MovieCard};
  width: 100%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const MovieCardSection = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 100%;
`;

export const MovieCardImage = styled.img`
  height: 300px;
  width: 100%;
`;

export const CardImageTitle = styled.h3`
  color: ${({ theme }) => theme.color.wrapper};
  text-align: left;
`;

export const MovieCardOverview = styled.p`
  margin-top: 0;
  color: ${({ theme }) => theme.color.wrapper};
  text-align: left;
  font-size: 13px;
`;

export const LargeButton = styled.button`
  width: 100%;
  height: ${(props) => props.height ?? "40px"};
  background-color: ${({ theme }) => theme.background.SearchButton};
  outline: none;
  border: 1px solid transparent;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.color.wrapper};
  cursor: pointer;
`;

export const TextButtonSeperator = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
