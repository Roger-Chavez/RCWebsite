import React, { useState, useEffect, useRef, forwardRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import style from "./TypingAnimation.module.css";
import { Container } from "@mui/material";

const TypingAnimation = forwardRef(({ onComplete }, ref) => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Roger Chavez. Welcome to my website!";
  const typingSpeed = 89; // Typing speed in ms
  const indexRef = useRef(0);
  const currentText = useRef("");

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        // Update the current text
        currentText.current += fullText[indexRef.current];
        setText(currentText.current);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        onComplete();
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [fullText, typingSpeed, onComplete]);

  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} ref={ref} disableGutters>
        <div className={style.landing}>
          <div className={style.textWrapper}>
            <span className={style.typedText}>
              {text}
              <span className={style.cursor}>▮</span>
            </span>
          </div>
        </div>
      </Container>
    </>
  );
});

export default TypingAnimation;
