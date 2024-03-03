import "./App.css";
import { createKeyboard, miniKeys } from "./model/keyboard";
import { PianoRoll } from "./piano_roll/PianoRoll";

function App() {
  const kb = createKeyboard(miniKeys);

  return (
    <div style={{ overflow: "auto", display: "flex" }}>
      <PianoRoll keyboard={kb} notes={["A4", "C4", "E3", "D4", "E4"]} />
    </div>
  );
}

export default App;
