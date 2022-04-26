import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 90%;
  height: 48px;
  background-color: var(--grey-4);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 15px;
  border-radius: 4px;

  h2 {
    margin-left: 12px;
    text-transform: capitalize;
  }

  .techEdit-div {
    display: flex;
    align-items: center;
    margin-right: 12px;
    width: 100px;
    justify-content: space-around;

    button {
      width: 27px;
      height: 27px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--grey-3);
      color: var(--grey-0);
      border-style: none;
      border-radius: 4px;
    }
  }
`;
