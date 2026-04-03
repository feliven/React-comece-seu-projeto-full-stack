import "./style.css";
import logo from "../../assets/logo.svg";

function Logo(): React.JSX.Element {
  return (
    <div className="logo">
      <img src={logo} alt="Logotipo" />
      <h1>
        <strong>Alura</strong> Books
      </h1>
    </div>
  );
}

export default Logo;
