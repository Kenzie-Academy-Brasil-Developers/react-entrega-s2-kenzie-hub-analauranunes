import styled from "styled-components";

export const ErrorDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  h1 {
    width: 300px;
    text-align: center;
  }

  img {
    width: 300px;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  Header {
    margin-top: 26px;
    margin-bottom: 32px;

    width: 100%;
  }

  .salut-div {
    width: 100%;
    height: 131px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 1px solid var(--grey-3);
    border-bottom: 1px solid var(--grey-3);

    h1,
    p {
      margin-left: 7%;
    }
  }

  .techs-div {
    margin-top: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48.5%;
    margin: 26px 15px;
    width: 100%;

    button {
      background: var(--grey-3);
      color: var(--grey-0);
      border-style: none;
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 700;
    }
  }

  @media (min-width: 468px) {
    .salut-div {
      flex-direction: row;
      align-items: center;
      gap: 35%;

      h1,
      p {
        margin: 0;
      }
    }
  }
`;
