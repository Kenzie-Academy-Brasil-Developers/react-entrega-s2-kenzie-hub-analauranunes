import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { ModalEditTech } from "../ModalEditTech";
import { ContainerDiv } from "./style";

export const Card = ({ technologies }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  return (
    <>
      <ContainerDiv>
        <h2>{technologies.title}</h2>
        <div className="techEdit-div">
          <button onClick={() => handleClick()}>
            <FiEdit />
          </button>
          <p>{technologies.status}</p>
        </div>
      </ContainerDiv>
      <div>
        {showModal && (
          <ModalEditTech
            setShowModal={setShowModal}
            id={technologies.id}
            title={technologies.title}
          />
        )}
      </div>
    </>
  );
};
