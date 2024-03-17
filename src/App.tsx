import "./App.css";
import useSetFonts from "./utils/hooks/use-set-fonts";

function App() {
  useSetFonts();

  return (
    <main>
      <div className="mainComponent">
        <h1>pomodoro</h1>
      </div>
    </main>
  );
}

export default App;
