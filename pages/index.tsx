/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-key */
import { Box } from "@mui/material";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import "react-simple-keyboard/build/css/index.css";
import { ConfigModal } from "../components/configModal";
import { HelpModal } from "../components/helpModal";
import { KeyboardWordle } from "../components/keyboard";
import { Nav } from "../components/nav";
import { StatsModal } from "../components/statsModal";
import { WordleComponent } from "../components/wordle";
import { IWordle } from "../dtos/IWordle";
import { useAppDispatch, useAppSelector } from "../redux/hooks/hook";
import { initWordle, setWordle } from "../redux/reducers/wordle";

const Home: NextPage = () => {
  const appHeight = () => {
    const doc = document.documentElement;
    doc.style.setProperty("--app-height", `${window.innerHeight}px`);
  };
  const [helpModal, setHelpModal] = useState(false);
  const [configModal, setConfigModal] = useState(false);
  const [statsModal, setStatsModal] = useState(false);
  const wordles = useAppSelector((state) => state.wordle.wordles);
  const gameStatus = useAppSelector(
    (state) => state.wordle.wordles[state.wordle.mode].finish
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initWordle());
    window.addEventListener("resize", appHeight);
    appHeight();
  }, []);

  useEffect(() => {
    if (gameStatus) {
      setTimeout(() => {
        setStatsModal(true);
      }, 500);
    }
  }, [gameStatus]);

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.primary.main,
        display: "flex",
        flexDirection: "column",
        height: "var(--app-height)",
        width: "100vw",
      }}
    >
      <Nav
        setConfigModal={(req) => setConfigModal(req)}
        setHelpModal={(req) => setHelpModal(req)}
        setStatsModal={(req) => setStatsModal(req)}
      />
      <Box
        sx={{
          flex: "1 1 auto",
        }}
      >
        <Splide
          onMoved={(splide, index) => dispatch(setWordle(index))}
          options={{
            arrows: false,
            direction: "ltr",
            pagination: true,
          }}
        >
          {wordles?.map((word: IWordle) => (
            <SplideSlide>
              <WordleComponent mode={word} />
            </SplideSlide>
          ))}
        </Splide>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          width: "100%",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <Box
          sx={{
            width: "97%",
            maxWidth: "900px",
            mb: "0.3rem",
          }}
        >
          <KeyboardWordle />
        </Box>
      </Box>
      <HelpModal
        open={helpModal}
        handleClose={() => {
          setHelpModal(false);
        }}
      />
      <ConfigModal
        open={configModal}
        handleClose={() => {
          setConfigModal(false);
        }}
      />
      <StatsModal open={statsModal} handleClose={() => setStatsModal(false)} />
    </Box>
  );
};
export default Home;
