import { IWordle } from "../../dtos/IWordle";
import { WORD_LENGTH, WORD_TRIES } from "../consts";

export const Classic: IWordle = {
  name: "Classic",
  words: [],
  chances: 0,
  finish: false,
  character: 0,
  enigma: "FLUTE",
  finishModal: false,
  wrongChar: [],
  successChar: [],
  closeChar: [],
  word_tries: WORD_TRIES,
  word_length: WORD_LENGTH,
};
