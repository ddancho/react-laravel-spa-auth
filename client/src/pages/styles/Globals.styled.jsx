import { createGlobalStyle } from "styled-components";

const Globals = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;    
}

body {
    background-color: #f0f2f5;
}
`;

export default Globals;
