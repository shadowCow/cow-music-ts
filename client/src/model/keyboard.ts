export type Keyboard<K extends PianoKey> = {
  keys(): Readonly<Array<K>>;
  numKeys(): KeyMap<K>["order"]["length"];
  noteToIndex(note: K): IndexRange<KeyMap<K>["order"]>;
  indexToNote(index: IndexRange<KeyMap<K>["order"]>): K;
};

export function createKeyboard<K extends PianoKey>(
  keys: Readonly<Array<K>>
): Keyboard<K> {
  const km: KeyMap<K> = createKeyMap(keys);
  return {
    keys: () => km.order,
    numKeys: () => km.order.length,
    noteToIndex: (note: K) => km.noteToIndex[note],
    indexToNote: (i) => km.order[i as number],
  };
}

type KeyMap<K extends PianoKey> = {
  noteToIndex: Record<K, number>;
  order: Readonly<Array<K>>;
};

function createKeyMap<K extends PianoKey>(keys: Readonly<Array<K>>): KeyMap<K> {
  return {
    noteToIndex: keys.reduce((acc, value, index) => {
      acc[value] = index;
      return acc;
    }, {} as Record<K, number>),
    order: keys,
  };
}

type IndexRange<T extends Readonly<any[]>> = keyof T;

export const miniKeys = [
  "C3",
  "D3",
  "E3",
  "F3",
  "G3",
  "A4",
  "B4",
  "C4",
  "D4",
  "E4",
  "F4",
  "G4",
  "A5",
  "B5",
  "C5",
] as const;
export type MiniKeys = (typeof miniKeys)[number];

export const allKeys = [
  "A1",
  "As1",
  "B1",
  "C1",
  "Cs1",
  "D1",
  "Ds1",
  "E1",
  "F1",
  "Fs1",
  "G1",
  "Gs1",
  "A2",
  "As2",
  "B2",
  "C2",
  "Cs2",
  "D2",
  "Ds2",
  "E2",
  "F2",
  "Fs2",
  "G2",
  "Gs2",
  "A3",
  "As3",
  "B3",
  "C3",
  "Cs3",
  "D3",
  "Ds3",
  "E3",
  "F3",
  "Fs3",
  "G3",
  "Gs3",
  "A4",
  "As4",
  "B4",
  "C4",
  "Cs4",
  "D4",
  "Ds4",
  "E4",
  "F4",
  "Fs4",
  "G4",
  "Gs4",
  "A5",
  "As5",
  "B5",
  "C5",
  "Cs5",
  "D5",
  "Ds5",
  "E5",
  "F5",
  "Fs5",
  "G5",
  "Gs5",
  "A6",
  "As6",
  "B6",
  "C6",
  "Cs6",
  "D6",
  "Ds6",
  "E6",
  "F6",
  "Fs6",
  "G6",
  "Gs6",
  "A7",
  "As7",
  "B7",
  "C7",
  "Cs7",
  "D7",
  "Ds7",
  "E7",
  "F7",
  "Fs7",
  "G7",
  "Gs7",
  "A8",
  "As8",
  "B8",
  "C8",
  "Cs8",
  "D8",
  "Ds8",
  "E8",
  "F8",
  "Fs8",
  "G8",
  "Gs8",
] as const;
export type PianoKey = (typeof allKeys)[number];
