/* eslint-disable react/jsx-key */
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import {
  STATE_CLOSE,
  STATE_SUCCESS,
  STATE_WRONG,
} from "../configuration/consts";
import { getChar } from "../configuration/utils/wordle";
import { ICharacter } from "../dtos/characters";
import { IWord } from "../dtos/word";
import { useAppSelector } from "../redux/hooks/hook";
import { ShareWordle } from "./share";

export function StatsModal({ open, handleClose }) {
  const words = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode].words
  );
  const finish = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode].finish
  );
  const enigma = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode].enigma
  );
  const name = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode].name
  );

  return (
    <Modal open={open} onClose={handleClose} sx={{ outline: "none" }}>
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -30%)",
          width: "380px",
          height: "560px",
          borderRadius: "10px",
          backgroundColor: (theme) => theme.palette.primary.main,
          outline: "0",
        }}
      >
        <Box sx={{ width: "90%", m: "auto", p: "1rem" }}>
          <Box
            sx={{
              height: "2rem",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              pb: "2rem",
            }}
          >
            <IconButton aria-label="delete" onClick={() => handleClose()}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Typography
            sx={{ textAlign: "center", mb: "0.5rem", fontWeight: "bold" }}
          >
            {name}
          </Typography>
          <Box>
            {words.map((word: IWord) => (
              <Box
                sx={{
                  width: "max-content",
                  display: "flex",
                  gridGap: "0.1rem",
                  m: "auto",
                  mb: "0.1rem",
                }}
              >
                {word.word?.map((char: ICharacter) => getChar(char))}
              </Box>
            ))}
          </Box>
          {!finish ? (
            <Typography sx={{ textAlign: "center", mt: "3rem" }}>
              Finish the Wordle to share your score!
            </Typography>
          ) : (
            <>
              <Typography
                sx={{
                  textAlign: "center",
                  mt: ".5rem",
                  fontWeight: "bold",
                  color: (theme) => theme.palette.secondary.main,
                }}
              >
                The word was: {enigma}
              </Typography>
              <Box sx={{ pt: "1rem" }}>
                <Typography
                  sx={{
                    textAlign: "center",
                    color: (theme) => theme.palette.secondary.main,
                  }}
                >
                  Share With:
                </Typography>
                <ShareWordle />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
