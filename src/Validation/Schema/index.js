import * as yup from "yup";

export const SchemaRegister = yup.object().shape({
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
    .required("Campo obrigatório"),
  course_module: yup.string().required("Campo obrigatório"),
});

export const SchemaLogin = yup.object().shape({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().required("Campo obrigatório"),
});

export const SchemaNewTech = yup.object().shape({
  title: yup.string().required("Campo obrigatório"),
  status: yup.string().required("Campo obrigatório"),
});

export const SchemaEditTech = yup.object().shape({
  status: yup.string().required("Campo obrigatório"),
});
