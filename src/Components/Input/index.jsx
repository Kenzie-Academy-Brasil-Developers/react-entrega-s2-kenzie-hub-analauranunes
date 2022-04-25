import * as Style from "./style";

export const Input = ({ label, register, name, errors, ...rest }) => {
  return (
    <Style.ContainerDiv>
      <label>{label}</label>
      <Style.ContainerInput {...register(`${name}`)} {...rest} />
      {!!errors && <span>{errors}</span>}
    </Style.ContainerDiv>
  );
};
