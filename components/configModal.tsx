import Brightness4Icon from "@mui/icons-material/Brightness4";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, Modal, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../pages/_app";
import GitHubIcon from "@mui/icons-material/GitHub";

export function ConfigModal({ open, handleClose }) {
  const colorMode = useContext(ColorModeContext);

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
            variant="h3"
            sx={{
              pb: "1rem",
            }}
          >
            Settings
          </Typography>
          <Box
            sx={{
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Dark/Light Mode
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => colorMode.toggleColorMode()}
            >
              <Brightness4Icon />
            </IconButton>
          </Box>
          <Box
            sx={{
              borderBottom: "1px solid black",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                color: (theme) => theme.palette.secondary.main,
              }}
            >
              Code
            </Typography>
            <IconButton
              aria-label="delete"
              onClick={() => colorMode.toggleColorMode()}
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
