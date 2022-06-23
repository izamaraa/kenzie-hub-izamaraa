import styled from "styled-components";

export const DivPrincipal = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const HeaderLogin = styled.header`
  h1 {
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    color: #ff577f;
    font-size: 30px;
    font-family: none;
    font-weight: bold;
  }
`;
export const FormLogin = styled.form`
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
  h4 {
    display: flex;
    justify-content: space-around;
    height: 28px;
    font-weight: 700;
    font-size: 30px;
    line-height: 28px;
    color: #f8f9fa;
    margin-bottom: 2px;
  }

  p {
    display: flex;
    justify-content: space-around;
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
`;
export const BotaoEntrar = styled.button`
  background-color: #ff577f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;

  height: 48px;
  left: 0px;
  top: 0px;

  border: 1.2182px solid #ff577f;
  border-radius: 4px;
`;

export const BotaoCad = styled.button`
  background-color: #868e96;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;

  height: 48px;
  left: 0px;
  top: 0px;

  border: 1.2182px solid #868e96;
  border-radius: 4px;
`;
