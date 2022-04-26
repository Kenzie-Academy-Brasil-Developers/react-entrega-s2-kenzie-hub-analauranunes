import styled from "styled-components";

export const ContainerDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 296px;
  height: 284px;
  background: var(--grey-3);
  display: flex;
  flex-direction: column;
  border-radius: 4px;

  .addTech-div {
    background: var(--grey-2);
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
  }

  p{
    cursor: pointer;
    font-size: 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 234px;

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

    .select-label {
      align-self: flex-start;
      margin-left: 18px;
      color: var(--grey-0);
      font-size: 11.5px;
      font-weight: 400;
    }
  }
`;
