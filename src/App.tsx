import "./App.css";
import reactLogo from "./assets/react.svg";
import { useSettings } from "./utils/hooks/use-settings";
import viteLogo from "/vite.svg";
import useSetFonts from "./utils/hooks/use-set-fonts";

function App() {
  const settings = useSettings();
  useSetFonts();

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button>count is {settings?.settings.fonts}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
