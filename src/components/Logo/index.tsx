import styled from "styled-components";
import logo from "../../assets/logo.svg";

const LogoContainer = styled.div`
  cursor: pointer;
  min-width: 25vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    height: fit-content;
  }
`;

function Logo(): React.JSX.Element {
  return (
    <LogoContainer>
      <img src={logo} alt="Logotipo" />
      <h1>
        <strong>Alura</strong> Books
      </h1>
    </LogoContainer>
  );
}

export default Logo;
