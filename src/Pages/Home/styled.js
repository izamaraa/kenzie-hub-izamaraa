import styled from "styled-components";
export const DivDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: auto;
`;
export const DivHome = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
`;
export const UlHome = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-top: 20px;
  /* height: 416px; */
  width: 700px;
  background: #212529;
  border-radius: 4px;
  overflow-y: hidden;

  li {
    background-color: #121214;
    display: flex;
    width: 680px;
    height: 54px;
    margin: 5px;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px;
    color: white;
  }
  div {
    display: flex;
    align-items: center;
  }
  p {
    margin-right: 20px;
  }
  button {
    background-color: #121214;
    border-style: none;
    text-align: center;
  }
`;
export const HeaderDashboard = styled.header`
  margin-top: 20px;
  background-color: #000000;
  border: 1px solid #121214;
  display: flex;
  height: 72px;
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
export const InfosUser = styled.div`
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #121214;

  height: 118px;
  color: #868e96;

  h3 {
    font-weight: 700;
    font-size: 18px;

    color: #f8f9fa;
    p {
      font-size: 12px;
      line-height: 22px;

      color: #868e96;
    }
  }
`;
export const AdicionarTec = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #f8f9fa;
  }

  button {
    width: 32.49px;
    height: 32px;
    border-style: none;
    border-radius: 4px;
    background-color: #212529;
    color: #ffffff;
  }
`;
