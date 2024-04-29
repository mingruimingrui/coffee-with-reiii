import { Introduction } from "./components/introduction";
import { Menu } from "./components/menu";

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import "./common_style.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Coffee with Reiii</h1>
      </header>

      <div className="App-body">
        <Introduction />
        <Menu />
      </div>
    </div>
  );
}

export default App;
