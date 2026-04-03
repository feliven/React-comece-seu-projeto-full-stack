import "./App.css";
import Logo from "./components/Logo";

function App() {
  return (
    <div className="app">
      <header>
        <Logo></Logo>
        <ul>
          <li>
            <p>Categorias</p>
          </li>
          <li>
            <p>Minha estante</p>
          </li>
          <li>
            <p>Favoritos</p>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
