import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Box, IconButton } from "@mui/material";
import {
  TWITTER_SHARE_TEXT,
  WHATSAPP_SHARE_TEXT,
  WORD_LENGTH,
  WORD_TRIES,
} from "../configuration/consts";
import { getChar } from "../configuration/utils/wordle";
import { useAppSelector } from "../redux/hooks/hook";

export const ShareWordle = () => {
  const words = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode].words
  );
  const getMatrix = () => {
    var response: string = "";
    for (let i = 0; i < WORD_TRIES; i++) {
      for (let o = 0; o < WORD_LENGTH; o++) {
        response += getChar(words[i].word[o]);
      }
      response += "%0A";
    }
    return response;
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "50%",
        m: "auto",
        mt: "1rem",
      }}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          borderRadius: "50%",
          backgroundColor: "#00acee",
          height: { xs: "50px" },
          width: { xs: "50px" },
        }}
      >
        <IconButton
          onClick={() => window.open(TWITTER_SHARE_TEXT(getMatrix()))}
        >
          <TwitterIcon fontSize="medium" sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          borderRadius: "50%",
          backgroundColor: "#25D366",
          height: { xs: "50px" },
          width: { xs: "50px" },
        }}
      >
        <>
          <IconButton
            onClick={() => window.open(WHATSAPP_SHARE_TEXT(getMatrix()))}
          >
            <WhatsAppIcon fontSize="medium" sx={{ color: "white" }} />
          </IconButton>
        </>
      </Box>
    </Box>
  );
};
