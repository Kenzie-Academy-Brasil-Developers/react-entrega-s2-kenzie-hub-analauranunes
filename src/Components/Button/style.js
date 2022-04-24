import styled from "styled-components";

export const Buttons = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--grey-0);
  border-style: none;
  border-radius: 4px;
  background: ${(props) =>
    props.background ? props.background : "var(--grey-3)"};
  width: ${(props) => (props.width ? props.width : "79.54px")};
  padding: ${(props) => (props.padding ? props.padding : "0px 16px")};
  height: ${(props) => (props.height ? props.height : "25.58px")};
`;
