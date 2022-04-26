import { Card } from "../Card";
import { ContainerDiv } from "./style";

export const CardList = ({ technologies }) => {
  return (
    <ContainerDiv>
      {technologies.map((techs) => {
        return <Card key={techs.id} technologies={techs} />;
      })}
    </ContainerDiv>
  );
};
