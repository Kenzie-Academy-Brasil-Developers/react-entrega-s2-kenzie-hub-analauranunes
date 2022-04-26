import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import { SchemaRegister } from "../../Validation/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API } from "../../Services/API";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import * as Styled from "./style";
import { Redirect } from "react-router-dom";

export const Register = ({authenticated}) => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaRegister),
  });

  const handleData = (data) => {
    API.post("/users", data)
      .then(() => {
        toast.success("Conta criada com sucesso!");
        history.push("/");
      })
      .catch(() => {
        toast.error("Ops! E-mail já cadastrado");
      });
  };

  const handleClick = () => {
    history.push("/");
  };

  if(authenticated){
    return <Redirect to="/Home"/>
  }

  return (
    <Styled.ContainerDiv>
      <Header button={true}>
        <Button onClick={() => handleClick()} width="79px">Voltar</Button>
      </Header>
      <Styled.ContainerForm onSubmit={handleSubmit(handleData)}>
        <h1>Crie sua conta</h1>
        <span className="text-span">Rápido e grátis, vamos nessa</span>
        <Input
          name="name"
          type="text"
          label="Nome"
          placeholder="Digite seu nome"
          register={register}
          errors={errors.name?.message}
        />
        <Input
          name="email"
          type="text"
          label="E-mail"
          placeholder="Digite seu e-mail"
          register={register}
          errors={errors.email?.message}
        />
        <Input
          name="bio"
          type="text"
          label="Biografia"
          placeholder="Diga algo sobre você"
          register={register}
          errors={errors.bio?.message}
        />
        <Input
          name="contact"
          type="text"
          label="Contato"
          placeholder="Digite algum contato"
          register={register}
          errors={errors.contact?.message}
        />
        <Input
          name="password"
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          register={register}
          errors={errors.password?.message}
        />
        <Input
          name="confirmPassword"
          type="password"
          label="Confirmar Senha"
          placeholder="Digite sua confirmação senha"
          register={register}
          errors={errors.confirmPassword?.message}
        />
        <label className="select-label">Selecionar módulo</label>
        <select name="course_module" {...register("course_module")}>
          <option value="Primeiro módulo">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo">
            Quarto módulo (Backend Avançado)
          </option>
        </select>
        <span>{errors.course_module?.message}</span>
        <Button
          width="259.9px"
          height="38.5px"
          background="var(--color-primary-negative)"
          type="submit"
        >
          Cadastrar
        </Button>
      </Styled.ContainerForm>
    </Styled.ContainerDiv>
  );
};
