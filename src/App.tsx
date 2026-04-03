import "./App.css";
import IconesHeader from "./components/IconesHeader";
import Logo from "./components/Logo";
import OpcoesHeader from "./components/OpcoesHeader";

function App() {
  return (
    <div className="app">
      <header>
        <Logo />
        <div className="menu-e-botoes">
          <OpcoesHeader />
          <IconesHeader />
        </div>
      </header>
    </div>
  );
}

export default App;
