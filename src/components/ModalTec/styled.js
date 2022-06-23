import styled from "styled-components";
export const DivModal = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Modal = styled.form`
  width: 369px;
  height: 342px;
  background: #212529;
  box-shadow: 0px 4px 40px -10px rgb(0 0 0 / 25%);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  align-content: space-around;
  justify-content: space-around;
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
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 16.2426px;
    gap: 10.15px;
    color: #f8f9fa;
    height: 48px;
    background: #343b41;
    border: 1.2182px solid #343b41;
    border-radius: 4px;
  }
  p {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #343b41;
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: #f8f9fa;
  }
  label {
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: #f8f9fa;
  }
  div {
    height: 50px;
    width: 369px;
    display: flex;
  }
  span {
    color: #868e96;
  }
`;

export const Botao = styled.button`
  background-color: #ff577f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 22.3336px;
  gap: 10.15px;
  color: #f8f9fa;
  height: 48px;
  left: 0px;
  top: 0px;

  border: 1.2182px solid #ff577f;
  border-radius: 4px;
`;
export const BotaoFecharModal = styled.button`
  font-style: normal;
  font-size: 12px;
  line-height: 28px;
  text-align: center;
  height: 40.11px;
  left: 837px;
  top: 48px;
  background-color: #343b41;
  border-radius: 4px;
  color: #f8f9fa;
  border-style: none;
  padding: 0px 16.2426px;
  gap: 10.15px;
`;
