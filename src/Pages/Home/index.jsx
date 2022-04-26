import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { API } from "../../Services/API";
import { useEffect, useState } from "react";
import * as Styled from "./style";
import { CardList } from "../../Components/CardList";
import { ModalNewTech } from "../../Components/ModalNewTech";
import { Redirect } from "react-router-dom";

export const Home = ({ authenticated, setAuthenticated }) => {
  const [showModal, setShowModal] = useState(false);

  const [user] = useState(JSON.parse(localStorage.getItem("hubUser")) || "");
  const [token] = useState(JSON.parse(localStorage.getItem("hubToken")) || "");
  const [technologies, setTechnologies] = useState([]);

  useEffect(() => {
    API.get(`/users/${user.id}`, {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    }).then((res) => setTechnologies(res.data.techs));
  });

  const handleClickTech = () => {
    setShowModal(true);
  };

  const handleLogout = () => {
    localStorage.clear();
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Styled.ContainerDiv>
      <Header button={true}>
        <Button width="55px" height="32px" onClick={() => handleLogout()}>
          Sair
        </Button>
      </Header>
      <div className="salut-div">
        <h1>Olá, {user.name}</h1>
        <p>{user.course_module}</p>
      </div>
      <div className="techs-div">
        <h2>Tecnologias</h2>
        <button onClick={() => handleClickTech()}>+</button>
      </div>
      {technologies && <CardList technologies={technologies} />}

      {showModal && <ModalNewTech setShowModal={setShowModal} token={token} />}
    </Styled.ContainerDiv>
  );
};
