import { useEffect } from "react";
import { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import ModalTech from "../../components/ModalTec";
import api from "../../Services/api";
import { BsFillTrashFill } from "react-icons/bs";
import {
  DivHome,
  HeaderDashboard,
  InfosUser,
  AdicionarTec,
  UlHome,
  DivDiv,
} from "./styled";

function Home({ autenticado, setAutenticado, user }) {
  const [tech, setTech] = useState([]);

  const [modalOn, setModalOn] = useState(false);

  const history = useHistory();
  const token = JSON.parse(localStorage.getItem("token-kenzieHub"));
  useEffect(() => {
    carregaTechs();
  }, [tech]);

  function sair() {
    localStorage.clear();
    setAutenticado(false);
    return history.push("/login");
  }

  if (!autenticado) {
    return <Redirect to="/login" />;
  }

  function criaTecs(data) {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTech([...tech, response.data]))
      .catch((err) => console.log(err));
  }

  function carregaTechs() {
    const user = JSON.parse(localStorage.getItem("dadosUser"));
    api
      .get(`/users/${user.id}`)
      .then((response) => setTech(response.data.techs))
      .catch((err) => console.log(err));
  }

  function deletarTec(item) {
    api
      .delete(`/users/techs/${item.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch((err) => console.log(err));
  }

  return (
    <DivHome>
      <>
        <HeaderDashboard>
          <h1 className="h1Modal">Kenzie hub</h1>

          <button className="buttonModal" onClick={sair}>
            {" "}
            sair{" "}
          </button>
        </HeaderDashboard>
      </>

      <InfosUser>
        <>
          <h3>Olá, {user.name}</h3>
        </>
        <>
          <p>{user.course_module}</p>
        </>
      </InfosUser>
      <AdicionarTec>
        <h3> Tecnologias</h3>

        <button onClick={() => setModalOn(true)} className="publicar">
          +
        </button>
      </AdicionarTec>
      {modalOn ? (
        <ModalTech setModalOn={setModalOn} funcaoModal={criaTecs} />
      ) : (
        ""
      )}
      <DivDiv>
        <UlHome>
          {tech.map((item, index) => (
            <li key={index}>
              <p>{item.title}</p>

              <div>
                <p>{item.status}</p>

                <button className="excluirTec" onClick={() => deletarTec(item)}>
                  <BsFillTrashFill />
                </button>
              </div>
            </li>
          ))}
        </UlHome>
      </DivDiv>
    </DivHome>
  );
}
export default Home;
