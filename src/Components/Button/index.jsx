import * as Styled from "./style"

export const Button = ({
  children,
  width,
  background,
  padding,
  height,
  ...rest
}) => {
  return (
    <Styled.Buttons
      width={width}
      background={background}
      padding={padding}
      height={height}
      {...rest}
    >
      {children}
    </Styled.Buttons>
  );
};
