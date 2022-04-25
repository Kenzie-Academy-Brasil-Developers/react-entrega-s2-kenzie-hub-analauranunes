import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { SchemaLogin } from "../../Validation/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../Services/API";
import { Redirect, useHistory } from "react-router-dom";
import { useState } from "react";
import * as Style from "./styles";
import { toast } from "react-toastify";

export const Login = () => {
  const history = useHistory();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaLogin),
  });

  const handleLogin = (data) => {
    API.post("/sessions", data)
      .then((res) => {
        const { user, token } = res.data;

        localStorage.setItem("hubUser", JSON.stringify(user));
        localStorage.setItem("hubToken", JSON.stringify(token));

        toast.success("Login efetuado com sucesso!");

        setIsLoggedIn(true);
        history.push("/Home");
      })

      .catch(() => {
        toast.error("Ops! Algo deu errado");
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/Home" />;
  }

  const handleClick = () => {
    history.push("/Register");
  };

  return (
    <Style.ContainerDiv>
      <Header button />
      <Style.ContainerForm onSubmit={handleSubmit(handleLogin)}>
        <h1>Login</h1>
        <Input
          name="email"
          type="text"
          label="E-mail"
          placeholder="Digite seu e-mail"
          register={register}
          errors={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register}
          errors={errors.password?.message}
        />
        <Button
          width="259.9px"
          height="38.5px"
          background="var(--color-primary)"
          type="submit"
        >
          Entrar
        </Button>
        <span className="account-span">Ainda não possui uma conta?</span>
        <Button
          width="259.9px"
          height="38.5px"
          background="var(--grey-1)"
          type="submit"
          onClick={() => handleClick()}
        >
          Cadastre-se
        </Button>
      </Style.ContainerForm>
    </Style.ContainerDiv>
  );
};
