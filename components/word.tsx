import { Box } from "@mui/material";

export function Word({ children }) {
  return (
    <Box
      sx={{
        width: "max-content",
        display: "flex",
        gridGap: "0.5rem",
        m: "auto",
        mb: "0.5rem",
      }}
    >
      {children}
    </Box>
  );
}
