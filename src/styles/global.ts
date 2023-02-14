import { createGlobalStyle } from "styled-components";
import Bg from "../assets/bg.png";

export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}

body{
    background:${(props) => props.theme.background};
    color:${(props) => props.theme["base-text"]};
    -webkit-font-smoothing:antialiased;
    background: url(${Bg});
  background-size: cover;
  background-repeat: no-repeat;
}
body,input,textarea,button{
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size:1rem;
}
img{
    max-width: 100%;
}
`;
