import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   

   html, body, #root {
        background: ${({ theme }) => theme.background.wrapper};
        color: ${({ theme }) => theme.color.wrapper};
        height: 100%;
        margin: 0;
        padding: 0;

    }
`;

export default GlobalStyle;
