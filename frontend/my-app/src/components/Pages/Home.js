import BasicTabs from "../Navigation/BasicTabs";
import LandingPage from "./LandingPage";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { animate, hover } from "motion";
import { splitText } from "motion-plus";
import { useMotionValue } from "motion/react";
import { useEffect, useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const velocityX = useMotionValue(0);
  const velocityY = useMotionValue(0);
  const prevEvent = useRef(0);

  useEffect(() => {
    if (!containerRef.current) return;

    const { chars } = splitText(containerRef.current.querySelector(".h1"));

    const handlePointerMove = (event) => {
      const now = performance.now();
      const timeSinceLastEvent = (now - prevEvent.current) / 1000; // seconds
      prevEvent.current = now;
      velocityX.set(event.movementX / timeSinceLastEvent);
      velocityY.set(event.movementY / timeSinceLastEvent);
    };

    document.addEventListener("pointermove", handlePointerMove);

    hover(chars, (element) => {
      const speed = Math.sqrt(
        velocityX.get() * velocityX.get() + velocityY.get() * velocityY.get()
      );
      const angle = Math.atan2(velocityY.get(), velocityX.get());
      const distance = speed * 0.1;

      animate(
        element,
        {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        },
        { type: "spring", stiffness: 100, damping: 50 }
      );
    });

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <h1 className="h1">
        Website coming soon! Move your pointer over the text to scatter.
      </h1>
      <Stylesheet />
    </div>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 870px;
                text-align: left;
                color: white;
            }

            .split-char {
                will-change: transform, opacity;
            }
        `}</style>
  );
}
//   // Handle resize event in Home component
//   const handleResize = () => {
//     window.dispatchEvent(new Event("resize")); // Trigger layout recalculation
//   };

//   return (
//     <Container
//       maxWidth={"lg"}
//       disableGutters
//       sx={{ height: "100vh", background: "#6b758a" }}
//     >
//       <Grid container columns={12}>
//         <Grid
//           size={{ xs: 12, sm: 12, md: 12 }}
//           sx={{
//             alignContent: "center",
//             display: "flex",
//             width: "100%",
//           }}
//         >
//           <BasicTabs />
//         </Grid>
//         <Grid size={{ xs: 12, sm: 12, md: 12 }}>
//           <LandingPage resize={handleResize} />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }
