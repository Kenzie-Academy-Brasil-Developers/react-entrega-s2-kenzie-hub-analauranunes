import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        margin: 0;
        padding: 0;
        height: 100vh;
        width: 100vw;
        background: var(--grey-4);
        font-family: "Inter", sans-serif;
        --grey-4: rgba(18, 18, 20, 1);
        --grey-3: rgba(33, 37, 41, 1);
        --grey-2: rgba(52, 59, 65, 1);
        --grey-1: rgba(134, 142, 150, 1);
        --grey-0: rgba(248, 249, 250, 1);
        --color-primary: rgba(255, 87, 127, 1);
        --color-primary-focus: rgba(255, 66, 127, 1);
        --color-primary-negative: rgba(89, 50, 63, 1);
    }

    button{
        cursor: pointer;
    }

    h1, h2, h3{
        font-size: 16px;
        font-weight: bold;
    }

    p{
        font-size: 12px;
    }
`;
