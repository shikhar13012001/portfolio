import "../styles/globals.css";
import React from "react";
import { Box } from "@mui/material";
import easyScroll from "easy-scroll";
import { StylesProvider } from "@mui/styles";
function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    const pointer = document.createElement("div");
    pointer.id = "pointer-dot";
    const ring = document.createElement("div");
    ring.id = "pointer-ring";
    document.body.insertBefore(pointer, document.body.children[0]);
    document.body.insertBefore(ring, document.body.children[0]);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHover = false;
    let mouseDown = false;
    const init_pointer = (options) => {
      window.onmousemove = (mouse) => {
        mouseX = mouse.clientX;
        mouseY = mouse.clientY;
      };

      window.onmousedown = (mouse) => {
        mouseDown = true;
      };

      window.onmouseup = (mouse) => {
        mouseDown = false;
      };

      const trace = (a, b, n) => {
        return (1 - n) * a + n * b;
      };
      window["trace"] = trace;

      const getOption = (option) => {
        let defaultObj = {
          pointerColor: "#750c7e",
          ringSize: 15,
          ringClickSize: (options["ringSize"] || 15) - 5,
        };
        if (options[option] == undefined) {
          return defaultObj[option];
        } else {
          return options[option];
        }
      };

      const render = () => {
        ringX = trace(ringX, mouseX, 0.2);
        ringY = trace(ringY, mouseY, 0.2);

        if (document.querySelector(".p-action-click:hover")) {
          pointer.style.borderColor = getOption("pointerColor");
          isHover = true;
        } else {
          pointer.style.borderColor = "white";
          isHover = false;
        }
        ring.style.borderColor = getOption("pointerColor");
        if (mouseDown) {
          ring.style.padding = getOption("ringClickSize") + "px";
        } else {
          ring.style.padding = getOption("ringSize") + "px";
        }

        pointer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        ring.style.transform = `translate(${
          ringX -
          (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))
        }px, ${
          ringY -
          (mouseDown ? getOption("ringClickSize") : getOption("ringSize"))
        }px)`;

        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    };
    init_pointer({
      pointerColor: "#7176eb",
      ringSize: 15, // Pixels
      ringClickSize: 20, // Pixels when clicking
    });
  }, []);

  React.useEffect(() => {
    easyScroll({
      scrollableDomEle: window,
      direction: "bottom",
      duration: 1000,
      easingPreset: "easeInOutQuad",
      scrollAmount: 0,
    });
  }, []);
  return (
    <Box sx={{ width: "100%", minHeight: "100vh" }} id="scroll-container">
      <Component {...pageProps} />
    </Box>
  );
}

export default MyApp;
