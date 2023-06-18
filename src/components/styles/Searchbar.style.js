import styled from "styled-components";

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
  background-color: #252846;
  color: ${({ theme }) => theme.color.wrapper};
  border-radius: 0;
  dispaly: flex;
  align-items: center;
  margin-left: 40px;
  margin-top: 20px;
  transition: all 0.3s ease;
`;

export const FormContainer = styled.form`
  position: relative;
  width: 100%;
  height: 48px;
`;

export const SearchInput = styled.input`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 85%;
  background-color: transparent;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;
  color: ${({ theme }) => theme.color.wrapper};
  text-indent: 50px;
`;

export const CloseButton = styled.button`
  position: absolute;
  right: 150px;
  top: 12px;
  width: 24px;
  height: 24px;
  opacity: 0.3;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &:before,
  &:after {
    position: absolute;
    left: 9px;
    top: 5px;
    content: " ";
    height: 10px;
    width: 2px;
    background-color: #333;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 15%;
  height: 100%;
  background-color: #000;
  outline: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.color.wrapper};
`;
