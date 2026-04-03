import "./style.css";
import IconesHeader from "../IconesHeader";
import Logo from "../Logo";
import OpcoesHeader from "../OpcoesHeader";

function Header() {
  return (
    <header>
      <Logo />
      <div className="menu-e-botoes">
        <OpcoesHeader />
        <IconesHeader />
      </div>
    </header>
  );
}

export default Header;
