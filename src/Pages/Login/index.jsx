import { useHistory, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../Services/api";
import {
  DivPrincipal,
  BotaoCad,
  BotaoEntrar,
  FormLogin,
  HeaderLogin,
} from "./styled";
export default function Login({ autenticado, setAutenticado, setUser }) {
  const history = useHistory();

  const validacoesYup = yup.object().shape({
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
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  function onSubmit(data) {
    api
      .post("/sessions", data)
      .then((response) => {
        console.log(response.data);
        window.localStorage.clear();
        const { token, user } = response.data;
        setUser(response.data.user);
        window.localStorage.setItem("dadosUser", JSON.stringify(user));
        window.localStorage.setItem("token-kenzieHub", JSON.stringify(token));
        setAutenticado(true);
        toast.success("Login,efetuado com sucesso!");
        return history.push(`/home`);
      })
      .catch((error) => {
        toast.error("Email ou senha inválidos, tente novamente!");
      });
  }
  if (autenticado) {
    return <Redirect to={`/home`} />;
  }
  return (
    <DivPrincipal>
      <HeaderLogin>
        <h1>Kenzie Hub</h1>
      </HeaderLogin>
      <div className="formularioLogin">
        <FormLogin onSubmit={handleSubmit(onSubmit)}>
          <h4>Login</h4>
          <label>Email</label>
          <input
            placeholder=" Digite aqui seu email"
            {...register("email")}
          ></input>
          <span>{errors.email?.message}</span>
          <label>Senha</label>
          <input
            placeholder="digite aqui sua senha"
            {...register("password")}
          ></input>
          <span>{errors.password?.message}</span>
          <BotaoEntrar type="submit">ENTRAR</BotaoEntrar>
          <p>Ainda nao possui uma conta ?</p>
          <BotaoCad onClick={() => history.push("/")}>CADASTRE-SE</BotaoCad>
        </FormLogin>
      </div>
    </DivPrincipal>
  );
}
