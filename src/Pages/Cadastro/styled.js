import styled from "styled-components";

export const DivPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BotaoCadastro = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;

  height: 48px;

  background: #59323f;

  border: 1.2182px solid #59323f;
  border-radius: 4px;

  flex: none;
  order: 9;
  flex-grow: 0;
`;
export const FormCadastro = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 42px 22px;
  gap: 22px;
  width: 370px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  span {
    color: #868e96;
  }
  h3 {
    height: 28px;
    font-weight: 700;
    font-size: 30px;
    line-height: 28px;
    color: #f8f9fa;
    margin-bottom: 2px;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  p {
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: #868e96;
  }
  input {
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    height: 40.11px;

    background: #343b41;
    border-radius: 4px;
    color: #f8f9fa;
    border-style: none;

    gap: 10.15px;
  }

  label {
    font-size: 12.182px;
    color: #f8f9fa;

    font-size: 12.182px;
  }
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;

    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
  }
`;
export const Header = styled.header`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  h1 {
    color: #ff577f;
    font-size: 30px;
    font-family: none;
    font-weight: bold;
    margin-right: 195px;
  }
  button {
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    height: 40.11px;
    left: 837px;
    top: 48px;
    background: #212529;
    border-radius: 4px;
    color: #f8f9fa;
    border-style: none;
    padding: 0px 16.2426px;
    gap: 10.15px;
  }
`;
