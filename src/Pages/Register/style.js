import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  Header {
    width: 300px;
    margin-top: 55px;
    margin-bottom: 30px;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: var(--grey-3);
  width: 296px;
  height: 750px;
  border-radius: 4px;
  margin-bottom: 30px;

  span {
    font-size: 9px;
    font-weight: 600;
    color: rgba(232, 63, 91, 1);
    align-self: flex-start;
  }

  .text-span {
    align-self: center;
    color: var(--grey-1);
  }

  .select-label {
    align-self: flex-start;
    margin-left: 18px;
    color: var(--grey-0);
    font-size: 11.5px;
    font-weight: 400;
  }

  select {
    width: 257px;
    height: 42px;
    background: var(--grey-2);
    border-style: none;
    border-radius: 4px;
    color: var(--grey-1);
    outline: none;
    padding-left: 8px;
  }
`;
