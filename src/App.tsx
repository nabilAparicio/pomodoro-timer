import { useEffect, useState } from "react";
import WebFont from "webfontloader";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [fontType, setFontType] = useState("Droid Sans");

  const changeFont = () => {
    if (fontType === "Droid Sans") {
      setFontType("Chilanka");
      return;
    }
    setFontType("Droid Sans");
  };

  useEffect(() => {
    if (fontType === "Droid Sans") {
      WebFont.load({
        google: {
          families: ["Droid Sans"],
        },
      });
      document.documentElement.style.setProperty(
        "--dynamic-fonts",
        "Droid Sans"
      );
    }
    if (fontType === "Chilanka") {
      WebFont.load({
        google: {
          families: ["Chilanka"],
        },
      });
      document.documentElement.style.setProperty("--dynamic-fonts", "Chilanka");
    }
  }, [fontType]);

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
        <button onClick={changeFont}>count is {fontType}</button>
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
