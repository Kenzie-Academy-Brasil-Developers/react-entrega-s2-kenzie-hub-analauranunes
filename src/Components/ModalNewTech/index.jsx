import { API } from "../../Services/API";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";
import { SchemaNewTech } from "../../Validation/Schema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { ContainerDiv } from "./style";

export const ModalNewTech = ({ setShowModal, token }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SchemaNewTech),
  });

  const handleData = (data) => {
    API.post("/users/techs", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(() => {
        toast.success("Tecnologia cadastrada com sucesso!");
        setShowModal(false);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Tecnologia já cadastrada");
      });
  };

  const handleClickOut = () => {
    setShowModal(false);
  };

  return (
    <ContainerDiv>
        <div className="addTech-div">
          <h3>Cadastrar Tecnologia</h3>
          <p onClick={() => handleClickOut()}>X</p>
        </div>
        <form onSubmit={handleSubmit(handleData)}>
          <Input
            name="title"
            type="text"
            label="Nome"
            placeholder="Digite a tecnologia"
            register={register}
            errors={errors.title?.message}
          />
          <label className="select-label">Selecionar status</label>
          <select name="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
          <Button
            width="259.9px"
            height="38.5px"
            background="var(--color-primary)"
            type="submit"
          >
            Cadastrar Tecnologia
          </Button>
        </form>
    </ContainerDiv>
  );
};
