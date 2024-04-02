import "./App.css";
import { ClockDisplay } from "./components/clock-display/clock-display";
import ThreeWaySwitch from "./components/three-way-switch/three-way-switch";
import useSetFonts from "./utils/hooks/use-set-fonts";

function App() {
  useSetFonts();

  return (
    <main>
      <div className="mainComponent">
        <h1>pomodoro</h1>
        <ThreeWaySwitch />
        <ClockDisplay percentage={90} radius={150}>
          <h2>25:00</h2>
        </ClockDisplay>
      </div>
    </main>
  );
}

export default App;
