import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import produce from "immer";
import { Classic } from "../../configuration/gametype/classic";
import { Food } from "../../configuration/gametype/food";
import { Nerd } from "../../configuration/gametype/nerd";
import {
  addWord,
  deleteChar,
  init,
  insertChar,
} from "../../configuration/utils/wordle";
import { IWordle } from "../../dtos/IWordle";

export interface InitialState {
  mode: number;
  wordles: IWordle[];
}

const initialState: InitialState = {
  mode: 0,
  wordles: [Classic, Nerd, Food],
};
// FLAT REDUCER
export const wordleReducer = createSlice({
  name: "wordle",
  initialState,
  reducers: {
    insertCharacter: (state, action: PayloadAction<string>) => {
      return produce(state, (draftstate: InitialState) => {
        insertChar(draftstate.wordles[draftstate.mode], action.payload);
      });
    },
    initWordle: (state) => {
      return produce(state, (draftstate) => {
        draftstate.wordles.forEach((wordle) => init(wordle));
      });
    },
    deleteCharacter: (state) => {
      return produce(state, (draftstate) => {
        deleteChar(draftstate.wordles[draftstate.mode]);
      });
    },
    enterWord: (state) => {
      return produce(state, (draftstate) => {
        addWord(draftstate.wordles[draftstate.mode]);
      });
    },
    setWordle: (state, action: PayloadAction<number>) => {
      return produce(state, (draftstate) => {
        draftstate.mode = action.payload;
      });
    },
  },
});

export const {
  insertCharacter,
  initWordle,
  deleteCharacter,
  enterWord,
  setWordle,
} = wordleReducer.actions;
