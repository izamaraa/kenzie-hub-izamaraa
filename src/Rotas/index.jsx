import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

export default function Rotas() {
  const [autenticado, setAutenticado] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token-kenzieHub");

    if (token) {
      setAutenticado(true);
    }
  }, [autenticado]);

  return (
    <Switch>
      <Route exact path="/">
        <Cadastro autenticado={autenticado} />
      </Route>

      <Route path="/login">
        <Login
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          setUser={setUser}
        />
      </Route>

      <Route path="/home">
        <Home
          autenticado={autenticado}
          setAutenticado={setAutenticado}
          user={user}
        />
      </Route>
    </Switch>
  );
}
