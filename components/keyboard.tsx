import Keyboard from "react-simple-keyboard";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import {
  deleteCharacter,
  enterWord,
  insertCharacter,
} from "../redux/reducers/wordle";

export const KeyboardWordle = () => {
  const wordle = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode]
  );
  const dispatch = useAppDispatch();

  const onKeyPress = (button) => {
    switch (button) {
      case "{bksp}": {
        dispatch(deleteCharacter());
        break;
      }
      case "{enter}": {
        dispatch(enterWord());
        break;
      }
      default: {
        dispatch(insertCharacter(button));
        break;
      }
    }

    console.log("Button pressed", button);
  };
  return (
    <>
      <Keyboard
        onKeyPress={(button) => onKeyPress(button)}
        theme={"hg-theme-default hg-layout-default myTheme"}
        layoutName={"default"}
        layout={{
          default: [
            "Q W E R T Y U I O P",
            "A S D F G H J K L",
            "{enter} Z X C V B N M {bksp}",
          ],
        }}
        buttonTheme={[
          {
            class: "hg-WRONG",
            buttons:
              wordle?.wrongChar == undefined ? "" : wordle.wrongChar.join(" "),
          },
          {
            class: "hg-CLOSE",
            buttons:
              wordle?.closeChar == undefined ? "" : wordle.closeChar.join(" "),
          },
          {
            class: "hg-SUCCESS",
            buttons:
              wordle?.successChar == undefined
                ? ""
                : wordle.successChar.join(" "),
          },
        ]}
        display={{
          "{bksp}": "Delete",
          "{enter}": "Send",
        }}
      />
    </>
  );
};
