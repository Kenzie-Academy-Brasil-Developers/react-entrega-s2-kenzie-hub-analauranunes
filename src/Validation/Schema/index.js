import * as yup from "yup";

export const Schema = yup.object().shape({
  name: yup.string().required("Campo obrigatório"),
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  password: yup
    .string()
    .required("Campo obrigatório")
    .min(8, "Mínimo de 8 caracteres"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Senhas estão diferentes")
    .required("Campo obrigatório")
});
