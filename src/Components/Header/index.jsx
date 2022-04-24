import KenzieHub from "../../Assets/Images/KenzieHub.svg";
import {HeaderContainer} from "./style"

export const Header = ({ children, button = false }) => {
  return (
    <HeaderContainer button={button}>
      <img src={KenzieHub} alt="KenzieHub" />
      {children}
    </HeaderContainer>
  );
};
