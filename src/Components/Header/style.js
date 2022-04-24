import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.button ? "space-around" : "center")};
  margin-top: 49.46px;
`;
