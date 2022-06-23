import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Redirect, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../Services/api";
import { DivPrincipal, FormCadastro, Header, BotaoCadastro } from "./styled";

export default function Cadastro({ autenticado }) {
  const history = useHistory();

  const validacoesYup = yup.object().shape({
    name: yup.string().required("Preencher campo nome é obrigatório!"),
    email: yup
      .string()
      .required(" Preencher campo Email é obrigatorio!")
      .email("Email inválido"),
    password: yup
      .string()
      .required("Preencher campo senha é obrigatório!")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato de senha incorreto ! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo"
      ),
    passwordConfirm: yup
      .string()
      .required("confirmação de senha é obrigatório!")
      .oneOf([yup.ref("password")], "senha incorreta, tente novamente"),

    bio: yup.string().required("Preencher campo biografia é obrigatório!"),

    contact: yup
      .string()
      .required("Preencher campo opacoes e contato é obrigatório!"),
    course_module: yup.string().required("modulo obrigatorio"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  function onSubmit(data) {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response);
        toast.success("Usuario cadastrado com sucesso!");
        return history.push("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops,erro ao criar a conta.Tente outro email!");
      });
  }
  if (autenticado) {
    return <Redirect to={`/home`} />;
  }
  return (
    <DivPrincipal>
      <div>
        <Header>
          <h1>Kenzie Hub</h1>
          <button onClick={() => history.push("/login")} className="voltar">
            Voltar
          </button>
        </Header>
      </div>
      <div>
        <FormCadastro onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3>Crie sua conta</h3>
            <p>Rápido e grátis, vamos nessa !</p>
          </div>
          <label>Nome</label>
          <input
            placeholder="Digite aqui seu nome"
            {...register("name")}
          ></input>
          <span>{errors.name?.message}</span>
          <label>Email</label>
          <input
            placeholder="Digite aqui seu email"
            {...register("email")}
          ></input>
          <span>{errors.email?.message}</span>
          <label>Senha</label>
          <input
            placeholder="Digite aqui sua senha"
            {...register("password")}
          ></input>
          <span>{errors.password?.message}</span>
          <label>Confirmar senha</label>
          <input
            placeholder="Confirme aqui sua senha"
            {...register("passwordConfirm")}
          ></input>
          <span>{errors.passwordConfirm?.message}</span>
          <label>Bio</label>
          <input placeholder="Fale sobre você" {...register("bio")}></input>
          <span>{errors.bio?.message}</span>
          <label>Contato</label>
          <input
            placeholder="Opção de contato"
            {...register("contact")}
          ></input>
          <span>{errors.contact?.message}</span>
          <label>Selecionar modulo</label>
          <select {...register("course_module")}>
            <option value="modulo1">Modulo 1 </option>
            <option value="modulo2">Modulo 2</option>
            <option value="modulo3">Modulo 3</option>
          </select>

          <BotaoCadastro type="submit">CADASTRAR</BotaoCadastro>
        </FormCadastro>
      </div>
    </DivPrincipal>
  );
}
