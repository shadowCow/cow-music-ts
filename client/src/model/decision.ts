import { PianoKey } from "./notes";

export type DecisionModel<K extends PianoKey> = {
  nextNote: (played: Readonly<Array<K>>) => K;
  likeLastNote: (played: Readonly<Array<K>>) => void;
  dislikeLastNote: (played: Readonly<Array<K>>) => void;
};

/*
this is an online model...

so...
the model should only be responsible for generating the next note...
which means it needs to be passed the sequence so far...

it would also...
need to be told like/dislike.
in a non-overlapping way.

*/
