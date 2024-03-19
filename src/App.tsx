import "./App.css";
import ThreeWaySwitch from "./components/three-way-switch/three-way-switch";
import useSetFonts from "./utils/hooks/use-set-fonts";

function App() {
  useSetFonts();

  return (
    <main>
      <div className="mainComponent">
        <h1>pomodoro</h1>
        <ThreeWaySwitch />
      </div>
    </main>
  );
}

export default App;
