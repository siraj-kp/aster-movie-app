import styled from "styled-components";

export const PosterContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${process.env.REACT_APP_MOVIE_IMAGE_URL}${(props) => props.url});
  height: 88%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const PosterContent = styled.div`
  position: absolute;
  top: 20px;
  left: 50px;
  width: 50%;
`;

export const PosterTitle = styled.h1`
  font-size: ${(props) => props.fontsize ?? "50px"};
  margin: 0;
  color: #fff;
`;

export const PosterDate = styled.p`
  font-size: 22px;
  margin-bottom: 0;
  color: #fff;
`;

export const PosterOverview = styled.p`
  font-size: 18px;
  color: #fff;
`;
