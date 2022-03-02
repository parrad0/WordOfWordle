import { IWord } from "./word";

export interface IWordle {
  name: string;
  chances: number;
  word_tries: number;
  word_length: number;
  words: IWord[];
  character: number;
  enigma: string;
  finish: boolean;
  finishModal: boolean;
  wrongChar: string[];
  successChar: string[];
  closeChar: string[];
}
