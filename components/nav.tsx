import BarChartIcon from "@mui/icons-material/BarChart";
import GitHubIcon from "@mui/icons-material/GitHub";
import HelpIcon from "@mui/icons-material/Help";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext } from "../pages/_app";

export const Nav = ({ setHelpModal, setConfigModal, setStatsModal }) => {
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      sx={{
        width: "100%",
        height: "5vh",
        backgroundColor: "grey",
        m: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        minWidth: "100px",
        borderBottom: "1px solid black",
        pb: "0.3rem",
        pt: ".3rem",
      }}
    >
      <Stack direction="row">
        <IconButton aria-label="help" onClick={() => setHelpModal(true)}>
          <HelpIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Stack>
      <Typography
        variant="h3"
        sx={{
          m: "auto",
        }}
      >
        WORDLE
      </Typography>
      <Stack direction="row">
        <IconButton aria-label="delete" onClick={() => setConfigModal(true)}>
          <SettingsIcon sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => setStatsModal(true)}>
          <BarChartIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};
