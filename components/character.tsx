import { Box, Typography } from "@mui/material";
import {
  STATE_CLOSE,
  STATE_SUCCESS,
  STATE_WRONG,
} from "../configuration/consts";

export function Character({ character, state }) {
  const getColor = (theme) => {
    let response = "";
    switch (state) {
      case STATE_SUCCESS: {
        response = theme.palette.background.success;
        break;
      }
      case STATE_CLOSE: {
        response = theme.palette.background.close;
        break;
      }
      case STATE_WRONG: {
        response = theme.palette.background.wrong;
        break;
      }
    }
    return response;
  };
  return (
    <Box
      sx={{
        width: { xs: "7vh", md: "7vh" },
        height: { xs: "7vh", md: "7vh" },
        borderRadius: "2px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          transform: state !== 4 ? "rotateX(180deg)" : "",
          position: "relative",
          width: "100%",
          height: "100%",
          textAlign: "center",
          transition: "transform 0.5s",
          transformStyle: "preserve-3d",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            border: character != "" ? "2px solid #000000" : "2px solid #A19B97",
          }}
        >
          <Typography variant="h4" color="black">
            {character}
          </Typography>
        </Box>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: (theme) => getColor(theme),
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            border: "2px solid #B6B6AB",
          }}
        >
          <Typography variant="h4" color="white">
            {character}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
