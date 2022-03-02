import { IWordle } from "../../dtos/IWordle";
import { WORD_LENGTH, WORD_TRIES } from "../consts";

export const Nerd: IWordle = {
  name: "👾 Nerd 👾",
  words: [],
  chances: 0,
  finish: false,
  character: 0,
  enigma: "MANCO",
  finishModal: false,
  wrongChar: [],
  successChar: [],
  closeChar: [],
  word_tries: WORD_TRIES,
  word_length: WORD_LENGTH,
};
