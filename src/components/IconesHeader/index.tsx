import styled from "styled-components";
import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";

const icones = [perfil, sacola];

const IconeContainer = styled.ul`
  display: flex;
  gap: 1.5rem;
`;

const Icone = styled.li`
  cursor: pointer;
`;

function IconesHeader() {
  return (
    <IconeContainer>
      {icones.map((icone) => (
        <Icone>
          <img src={icone} alt="" />
        </Icone>
      ))}
    </IconeContainer>
  );
}

export default IconesHeader;
