import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";

export function HelpModal({ open, handleClose }) {
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
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: "10px",
          outline: "0",
        }}
      >
        <Box sx={{ width: "90%", m: "auto", pr: "1rem", pl: "1rem" }}>
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
            variant="h3"
            sx={{
              pb: "1rem",
              color: (theme) => theme.palette.secondary.main,
            }}
          >
            How to play
          </Typography>
          <Typography>Guess the hidden word in six tries.</Typography>
          <Typography>Each try must be a valid 5-letter word.</Typography>
          <Typography>
            After each try the color of the letters changes to show how close
            you are to guessing the word.
          </Typography>
          <Typography sx={{ fontWeight: "bold", mb: ".3rem" }}>
            Examples:
          </Typography>
          <Box sx={{ display: "flex" }}>
            <SquareExample character="G" color="green" />
            <SquareExample character="R" />
            <SquareExample character="E" />
            <SquareExample character="E" />
            <SquareExample character="N" />
          </Box>
          <Typography sx={{ pt: "1rem", pb: "1rem" }}>
            Letter G is in the word and right position.
          </Typography>
          <Box sx={{ display: "flex" }}>
            <SquareExample character="G" />
            <SquareExample character="R" color="#c9b458" />
            <SquareExample character="E" />
            <SquareExample character="E" />
            <SquareExample character="P" />
          </Box>
          <Typography sx={{ pt: "1rem", pb: "1rem" }}>
            Letter R is in the word but not in right position.
          </Typography>
          <Box sx={{ display: "flex" }}>
            <SquareExample character="G" />
            <SquareExample character="R" />
            <SquareExample character="E" color="#3a3a3c" />
            <SquareExample character="E" />
            <SquareExample character="N" />
          </Box>
          <Typography sx={{ pt: "1rem", pb: "1rem" }}>
            Letter G is not in the word.
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
}
const SquareExample = ({
  character,
  color,
}: {
  character: string;
  color?: string;
}) => {
  return (
    <Box
      sx={{
        width: "2rem",
        height: "2rem",
        border: "1px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color ? color : "",
      }}
    >
      <Typography>{character}</Typography>
    </Box>
  );
};
