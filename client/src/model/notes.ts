export type Keyboard<K extends PianoKey> = {
  keys(): Readonly<Array<K>>;
  numKeys(): KeyMap<K>["order"]["length"];
  noteToIndex(note: K): IndexRange<KeyMap<K>["order"]>;
  indexToNote(index: number): K;
};

export function createKeyboard<K extends PianoKey>(km: KeyMap<K>): Keyboard<K> {
  return {
    keys: () => km.order,
    numKeys: () => km.order.length,
    noteToIndex: (note: K) => km.noteToIndex[note],
    indexToNote: (i) => km.order[i],
  };
}

export type KeyMap<K extends PianoKey> = {
  noteToIndex: NoteToIndex<K>;
  order: Array<K>;
};

export const miniKeyMap: KeyMap<MiniKeys> = {
  noteToIndex: {
    C3: 0,
    D3: 1,
    E3: 2,
    F3: 3,
    G3: 4,
    A4: 5,
    B4: 6,
    C4: 7,
    D4: 8,
    E4: 9,
    F4: 10,
    G4: 11,
    A5: 12,
    B5: 13,
    C5: 14,
  },
  order: [
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
  ],
};

type NoteToIndex<Key extends PianoKey> = {
  [K in Key]: number;
};

export function randomNote<K extends PianoKey>(keyboard: Keyboard<K>): K {
  const randomKeyIndex = getRandomInteger(keyboard.numKeys() - 1);

  return keyboard.indexToNote(randomKeyIndex);
}

/**
 * Generate a random integer between 0 and x (inclusive).
 * @param x Max value to generate, inclusive.
 * @returns Integer between 0 and x, inclusive.
 */
function getRandomInteger(x: number): number {
  return Math.floor(Math.random() * (x + 1));
}

export type KeySet = Array<PianoKey>;
export type IndexRange<T extends any[]> = keyof T;

export const miniKeys: Array<MiniKeys> = [
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
];

export type MiniKeys =
  | "C3"
  | "D3"
  | "E3"
  | "F3"
  | "G3"
  | "A4"
  | "B4"
  | "C4"
  | "D4"
  | "E4"
  | "F4"
  | "G4"
  | "A5"
  | "B5"
  | "C5";

export const allKeys: Array<PianoKey> = [
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
];

export type PianoKey =
  | "A1"
  | "As1"
  | "B1"
  | "C1"
  | "Cs1"
  | "D1"
  | "Ds1"
  | "E1"
  | "F1"
  | "Fs1"
  | "G1"
  | "Gs1"
  | "A2"
  | "As2"
  | "B2"
  | "C2"
  | "Cs2"
  | "D2"
  | "Ds2"
  | "E2"
  | "F2"
  | "Fs2"
  | "G2"
  | "Gs2"
  | "A3"
  | "As3"
  | "B3"
  | "C3"
  | "Cs3"
  | "D3"
  | "Ds3"
  | "E3"
  | "F3"
  | "Fs3"
  | "G3"
  | "Gs3"
  | "A4"
  | "As4"
  | "B4"
  | "C4"
  | "Cs4"
  | "D4"
  | "Ds4"
  | "E4"
  | "F4"
  | "Fs4"
  | "G4"
  | "Gs4"
  | "A5"
  | "As5"
  | "B5"
  | "C5"
  | "Cs5"
  | "D5"
  | "Ds5"
  | "E5"
  | "F5"
  | "Fs5"
  | "G5"
  | "Gs5"
  | "A6"
  | "As6"
  | "B6"
  | "C6"
  | "Cs6"
  | "D6"
  | "Ds6"
  | "E6"
  | "F6"
  | "Fs6"
  | "G6"
  | "Gs6"
  | "A7"
  | "As7"
  | "B7"
  | "C7"
  | "Cs7"
  | "D7"
  | "Ds7"
  | "E7"
  | "F7"
  | "Fs7"
  | "G7"
  | "Gs7"
  | "A8"
  | "As8"
  | "B8"
  | "C8"
  | "Cs8"
  | "D8"
  | "Ds8"
  | "E8"
  | "F8"
  | "Fs8"
  | "G8"
  | "Gs8";

export const A1 = 0;
export const As1 = 1;
export const B1 = 2;
export const C1 = 3;
export const Cs1 = 4;
export const D1 = 5;
export const Ds1 = 6;
export const E1 = 7;
export const F1 = 8;
export const Fs1 = 9;
export const G1 = 10;
export const Gs1 = 11;
export const A2 = 12;
export const As2 = 13;
export const B2 = 14;
export const C2 = 15;
export const Cs2 = 16;
export const D2 = 17;
export const Ds2 = 18;
export const E2 = 19;
export const F2 = 20;
export const Fs2 = 21;
export const G2 = 22;
export const Gs2 = 23;
export const A3 = 24;
export const As3 = 25;
export const B3 = 26;
export const C3 = 27;
export const Cs3 = 28;
export const D3 = 29;
export const Ds3 = 30;
export const E3 = 31;
export const F3 = 32;
export const Fs3 = 33;
export const G3 = 34;
export const Gs3 = 35;
export const A4 = 36;
export const As4 = 37;
export const B4 = 38;
export const C4 = 39;
export const Cs4 = 40;
export const D4 = 41;
export const Ds4 = 42;
export const E4 = 43;
export const F4 = 44;
export const Fs4 = 45;
export const G4 = 46;
export const Gs4 = 47;
export const A5 = 48;
export const As5 = 49;
export const B5 = 50;
export const C5 = 51;
export const Cs5 = 52;
export const D5 = 53;
export const Ds5 = 54;
export const E5 = 55;
export const F5 = 56;
export const Fs5 = 57;
export const G5 = 58;
export const Gs5 = 59;
export const A6 = 60;
export const As6 = 61;
export const B6 = 62;
export const C6 = 63;
export const Cs6 = 64;
export const D6 = 65;
export const Ds6 = 66;
export const E6 = 67;
export const F6 = 68;
export const Fs6 = 69;
export const G6 = 70;
export const Gs6 = 71;
export const A7 = 72;
export const As7 = 73;
export const B7 = 74;
export const C7 = 75;
export const Cs7 = 76;
export const D7 = 77;
export const Ds7 = 78;
export const E7 = 79;
export const F7 = 80;
export const Fs7 = 81;
export const G7 = 82;
export const Gs7 = 83;
export const A8 = 84;
export const As8 = 85;
export const B8 = 86;
export const C8 = 87;

type RangeHelper<
  N extends number,
  Result extends number[] = []
> = Result["length"] extends N
  ? Result
  : RangeHelper<N, [...Result, Result["length"]]>;

type Range<T extends number> = RangeHelper<T>;

// Example usage:
const myNumber = 5;
type MyRange = Range<typeof myNumber>;
type V = MyRange[number];
