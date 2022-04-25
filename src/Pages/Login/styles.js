import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100vh;
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: var(--grey-3);
  width: 296px;
  height: 402px;
  border-radius: 4px;

  span {
    font-size: 9px;
    font-weight: 600;
    color: rgba(232, 63, 91, 1);
    align-self: flex-start;
  }

  .account-span {
    color: var(--grey-1);
    align-self: center;
  }
`;
