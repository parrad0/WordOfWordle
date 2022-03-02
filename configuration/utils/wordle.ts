import { ICharacter } from "../../dtos/characters";
import { IWordle } from "../../dtos/IWordle";
import { STATE_CLOSE, STATE_SUCCESS, STATE_WRONG } from "../consts";

export const insertChar = (wordle: IWordle, action: string) => {
  if (!isWordFilled(wordle) && !wordle.finish) {
    wordle.words[wordle.chances].word[wordle.character].character = action;
    wordle.character++;
  }
};
export const init = (wordle: IWordle) => {
  for (let i = 1; i <= wordle.word_tries; i++) {
    wordle.words.push({
      word: [
        { character: "", state: 4 },
        { character: "", state: 4 },
        { character: "", state: 4 },
        { character: "", state: 4 },
        { character: "", state: 4 },
      ],
    });
  }
};
export const deleteChar = (wordle: IWordle) => {
  if (wordle.character != 0 && !wordle.finish) {
    wordle.words[wordle.chances].word[wordle.character - 1].character = "";
    wordle.character--;
  }
};
export const addWord = (wordle: IWordle) => {
  if (isWordFilled(wordle) && !wordle.finish) {
    if (rateWord(wordle)) {
      wordle.finish = true;
    } else if (!isLastWord(wordle)) {
      wordle.character = 0;
      wordle.chances++;
    } else {
      wordle.finish = true;
    }
  }
};

const rateWord = (wordle: IWordle) => {
  var success = 0;
  for (let i = 0; i < 5; i++) {
    var char = wordle.words[wordle.chances].word[i].character;
    if (char == wordle.enigma[i]) {
      wordle.words[wordle.chances].word[i].state = STATE_SUCCESS;
      wordle.successChar.push(char);
      success++;
    } else if (wordle.enigma.includes(char)) {
      wordle.words[wordle.chances].word[i].state = STATE_CLOSE;
      wordle.closeChar.push(char);
    } else {
      wordle.words[wordle.chances].word[i].state = STATE_WRONG;
      wordle.wrongChar.push(char);
    }
  }
  return success == wordle.word_length + 1;
};

export const getChar = (char: ICharacter) => {
  if (char?.state == undefined) {
    return "⬜";
  }
  switch (char.state) {
    case STATE_SUCCESS: {
      return "🟩";
    }
    case STATE_CLOSE: {
      return "🟨";
    }
    case STATE_WRONG: {
      return "⬛";
    }
    default: {
      return "⬜";
    }
  }
};
const isLastWord = (wordle: IWordle) => {
  return wordle.chances == wordle.word_tries - 1;
};
const isWordFilled = (wordle: IWordle) => {
  return wordle.character > wordle.word_length;
};
