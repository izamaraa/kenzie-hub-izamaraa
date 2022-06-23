import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DivModal, Modal, BotaoFecharModal, Botao } from "./styled";
export default function ModalTech({ setModalOn, funcaoModal }) {
  const validacoesYup = yup.object().shape({
    title: yup
      .string()
      .required("Preencher campo nome  tecnologia é obrigatório!"),
    status: yup.string().required("status obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  return (
    <DivModal>
      <Modal onSubmit={handleSubmit(funcaoModal)}>
        <p>
          Cadastrar Tecnologia
          <BotaoFecharModal onClick={() => setModalOn(false)}>
            X
          </BotaoFecharModal>
        </p>

        <label>Nome</label>
        <input
          placeholder="digite aqui o nome da nova tecnologia"
          {...register("title")}
        ></input>
        <span>{errors.title?.message}</span>
        <label>Selecionar status</label>
        <select {...register("status")}>
          <option value="iniciante">Iniciante</option>
          <option value="intermediario">Intermediario</option>
          <option value="avancado">Avançado</option>
        </select>
        <span>{errors.status?.message}</span>
        <Botao type="submit">Cadastrar tecnologia</Botao>
      </Modal>
    </DivModal>
  );
}
