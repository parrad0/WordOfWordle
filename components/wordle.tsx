/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { Box, Typography } from "@mui/material";
import { ICharacter } from "../dtos/characters";
import { IWordle } from "../dtos/IWordle";
import { IWord } from "../dtos/word";
import { Character } from "./character";
import { Word } from "./word";

export const WordleComponent = ({ mode }: { mode: IWordle }) => {
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mt: "auto",
        flexDirection: "column",
        pb: "3rem",
      }}
    >
      <Typography variant="h3" sx={{ pb: "1rem", pt: "1rem" }}>
        {mode.name}
      </Typography>
      <div>
        {mode.words.map((word: IWord) => (
          <Word>
            {word.word?.map((char: ICharacter) => (
              <Character character={char.character} state={char.state} />
            ))}
          </Word>
        ))}
      </div>
    </Box>
  );
};
