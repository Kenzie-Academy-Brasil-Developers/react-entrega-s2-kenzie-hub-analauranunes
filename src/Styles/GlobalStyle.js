import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        margin: 0;
        padding: 0;
        border: none;
        /* height: 100vh;
        width: 100vw; */
        background: var(--grey-4);
        font-family: "Inter", sans-serif;
        color: var(--grey-0);
        --grey-4: rgba(18, 18, 20, 1);
        --grey-3: rgba(33, 37, 41, 1);
        --grey-2: rgba(52, 59, 65, 1);
        --grey-1: rgba(134, 142, 150, 1);
        --grey-0: rgba(248, 249, 250, 1);
        --color-primary: rgba(255, 87, 127, 1);
        --color-primary-focus: rgba(255, 66, 127, 1);
        --color-primary-negative: rgba(89, 50, 63, 1);

        --toastify-color-success: rgba(63, 232, 100, 1);
        --toastify-icon-color-success: var(--toastify-color-success);
        --toastify-color-error: rgba(232, 63, 91, 1);
        --toastify-icon-color-error: var(--toastify-color-error);

        --toastify-color-dark: var(--grey-2);

        --toastify-toast-min-height: 64px;
        --toastify-toast-max-height: 69px;
        --toastify-toast-width: 286px;
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
