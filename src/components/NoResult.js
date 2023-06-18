import React from "react";
import {
  NoResultContainer,
  NoResultImage,
  NoResultText,
} from "./styles/NoResult.style";

function NoResult() {
  return (
    <NoResultContainer>
      <NoResultImage />
      <NoResultText>No Results Found</NoResultText>
    </NoResultContainer>
  );
}

export default NoResult;
