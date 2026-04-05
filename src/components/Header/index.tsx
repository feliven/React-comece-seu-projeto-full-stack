import styled from "styled-components";
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  background-color: palegoldenrod;
  height: 5rem;
  display: flex;
  justify-content: space-around;

  .menu-e-botoes {
    display: flex;
    align-items: center;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu-e-botoes">
        <OpcoesHeader />
        <IconesHeader />
      </div>
    </HeaderContainer>
  );
}

export default Header;
