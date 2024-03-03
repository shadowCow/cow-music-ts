import "./App.css";
import { createKeyboard, miniKeyMap } from "./model/notes";
import { PianoRoll } from "./piano_roll/PianoRoll";
import { QuarterNote } from "./sheet/Note";
import { Staff } from "./sheet/Staff";

function App() {
  const kb = createKeyboard(miniKeyMap);

  return (
    <div style={{ overflow: "auto", display: "flex" }}>
      <PianoRoll keyboard={kb} notes={["A4", "C4", "E3", "D4", "E4"]} />
    </div>
  );
}

function SheetMusic() {
  return (
    <>
      <Staff numBars={2} x={10} y={10} gap={20} barWidth={200} />
      <QuarterNote cx={50} cy={50} r={10} flagHeight={20 * 3.5} />
    </>
  );
}

export default App;
