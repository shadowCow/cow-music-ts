import { Keyboard, PianoKey } from "../model/keyboard";

export function PianoRoll<K extends PianoKey>(props: {
  keyboard: Keyboard<K>;
  notes: Array<K>;
}): JSX.Element {
  return (
    <div style={{ display: "flex", gap: "0px" }}>
      <KeyColumn keys={props.keyboard.keys()} />
      {props.notes.map((n) => (
        <NoteColumn key={n} keyboard={props.keyboard} note={n} />
      ))}
    </div>
  );
}

function KeyColumn(props: { keys: Readonly<Array<PianoKey>> }): JSX.Element {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
      {props.keys.map((k) => (
        <p
          key={k}
          style={{
            fontSize: "1rem",
            border: "1px solid black",
            padding: "0.5rem",
            margin: "0px",
          }}
        >
          {k}
        </p>
      ))}
    </div>
  );
}

function NoteColumn<K extends PianoKey>(props: {
  keyboard: Keyboard<K>;
  note: PianoKey;
}): JSX.Element {
  return (
    <div>
      {props.keyboard.keys().map((k) => (
        <p
          key={k}
          style={{
            fontSize: "1rem",
            border: "1px solid black",
            padding: "0.5rem",
            margin: "0px",
            backgroundColor: k === props.note ? "green" : undefined,
            color: k === props.note ? undefined : "white",
          }}
        >
          {k}
        </p>
      ))}
    </div>
  );
}
