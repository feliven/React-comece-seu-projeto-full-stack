import "./style.css";

const listaOpcoes = ["Categorias", "Minha estante", "Favoritos"];

function OpcoesHeader(): React.JSX.Element {
  return (
    <ul>
      {listaOpcoes.map((opcao) => (
        <li>
          <p>{opcao}</p>
        </li>
      ))}
    </ul>
  );
}

export default OpcoesHeader;
