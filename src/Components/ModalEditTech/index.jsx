import { API } from "../../Services/API";
import { Input } from "../Input";
import { Button } from "../Button";
import { SchemaEditTech } from "../../Validation/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { ContainerDiv } from "./style";

export const ModalEditTech = ({ setShowModal, id, title }) => {
  const [token] = useState(JSON.parse(localStorage.getItem("hubToken")) || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaEditTech),
  });

  const handleClickOut = () => {
    setShowModal(false);
  };

  const handleData = (data) => {
    API.put(`/users/techs/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setShowModal(false);
        toast.success("Tecnologia editada com sucesso!");
      })
      .catch(() => toast.error("Ops! Algo deu errado"));
  };

  const handleDelete = () => {
    API.delete(`/users/techs/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        setShowModal(false);
        toast.success("Tecnologia deletada com sucesso!");
      })
      .catch(() => toast.error("Ops! Algo deu errado"));
  };

  return (
    <ContainerDiv>
      <div className="editTech-div">
        <h3>Tecnologia Detalhes</h3>
        <p onClick={() => handleClickOut()}>X</p>
      </div>
      <form onSubmit={handleSubmit(handleData)}>
        <Input
          name="title"
          type="text"
          label="Nome do projeto"
          placeholder=""
          register={register}
          errors={errors.title?.messages}
          value={title}
          readOnly
        />
        <label className="select-label">Selecionar status</label>
        <select name="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <span>{errors.status?.message}</span>

        <Button
          width="163.09px"
          height="38.37px"
          background="var(--color-primary)"
          type="submit"
        >
          Salvar Alterações
        </Button>
      </form>
      <Button
        width="78.35px"
        height="38.37px"
        background="var(--grey-1)"
        onClick={() => handleDelete()}
      >
        Excluir
      </Button>
    </ContainerDiv>
  );
};
