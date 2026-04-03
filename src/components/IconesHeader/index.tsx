import "./style.css";
import perfil from "../../assets/perfil.svg";
import sacola from "../../assets/sacola.svg";

const icones = [perfil, sacola];

function IconesHeader() {
  return (
    <ul>
      {icones.map((icone) => (
        <li>
          <img src={icone} alt="" />
        </li>
      ))}
    </ul>
  );
}

export default IconesHeader;
