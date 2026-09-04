import { Box } from "@mui/material";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { SpeedInsights } from "@vercel/speed-insights/react";
import React from "react";
import "../styles/globals.css";

const theme = responsiveFontSizes(createTheme());

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Skip the custom cursor entirely on touch devices.
    if (window.matchMedia("(hover: none)").matches) return;

    const pointer = document.createElement("div");
    pointer.id = "pointer-dot";
    pointer.style.borderColor = "white";
    const ring = document.createElement("div");
    ring.id = "pointer-ring";
    document.body.insertBefore(pointer, document.body.children[0]);
    document.body.insertBefore(ring, document.body.children[0]);

    const pointerColor = "#7176eb";
    const ringSize = 15;
    const ringClickSize = 20;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let mouseDown = false;
    let rafId = null;

    const trace = (a, b, n) => (1 - n) * a + n * b;

    const render = () => {
      rafId = null;
      ringX = trace(ringX, mouseX, 0.2);
      ringY = trace(ringY, mouseY, 0.2);

      ring.style.borderColor = pointerColor;
      ring.style.padding = (mouseDown ? ringClickSize : ringSize) + "px";

      pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      ring.style.transform = `translate(${
        ringX - (mouseDown ? ringClickSize : ringSize)
      }px, ${
        ringY - (mouseDown ? ringClickSize : ringSize)
      }px)`;

      // Idle pause: stop the loop once the ring has settled on the pointer.
      if (!mouseDown && Math.abs(mouseX - ringX) < 0.5 && Math.abs(mouseY - ringY) < 0.5) {
        return;
      }
      rafId = requestAnimationFrame(render);
    };

    const restart = () => {
      if (rafId === null) rafId = requestAnimationFrame(render);
    };

    const onMouseMove = (mouse) => {
      mouseX = mouse.clientX;
      mouseY = mouse.clientY;
      // The dot tracks the pointer instantly — keep it in sync even while paused.
      pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      restart();
    };

    const onMouseDown = () => {
      mouseDown = true;
      restart();
    };

    const onMouseUp = () => {
      mouseDown = false;
      restart();
    };

    const onPointerOver = (e) => {
      if (e.target instanceof Element && e.target.closest(".p-action-click")) {
        pointer.style.borderColor = pointerColor;
      }
    };

    const onPointerOut = (e) => {
      if (e.target instanceof Element && e.target.closest(".p-action-click")) {
        pointer.style.borderColor = "white";
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);
    restart();

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
      pointer.remove();
      ring.remove();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Component {...pageProps} />
      </Box>
      <Box className="vigentte"></Box>
      <SpeedInsights />
    </ThemeProvider>
  );
}

export default MyApp;