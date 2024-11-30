import React, { useState, useEffect, useRef, forwardRef } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import style from "./TypingAnimation.module.css";
import { Container, Button } from "@mui/material";

const TypingAnimation = forwardRef(({ onComplete, onClick }, ref) => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Roger Chavez. Welcome to my website!";
  const typingSpeed = 89; // Typing speed in ms
  const indexRef = useRef(0);
  const currentText = useRef("");

  useEffect(() => {
    // Apply body styles when this component is mounted
    document.body.classList.add(style.mybody);

    // Cleanup styles when the component is unmounted
    return () => {
      document.body.classList.remove(style.mybody);
    };
  }, [style]);

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
        // indexRef.current = 0;
        // currentText.current = "";
        // setText("");
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [fullText, typingSpeed, onComplete]);

  // Display a button on the bottom that says skip and plays a loading bar witin the button
  // that shows how fast the animation is moving - really the percentage is based on the chars in a string
  return (
    <>
      <CssBaseline />
      <Container maxWidth={false} ref={ref}>
        <div className={style.landing}>
          <div className={style.textWrapper}>
            <span className={style.typedText}>
              {text}
              <span className={style.cursor}>▮</span>
            </span>
          </div>
        </div>
      </Container>
      <Button
        onClick={onClick}
        className={style.anchorButton}
        variant="outlined"
      >
        Skip
      </Button>
    </>
  );
});

export default TypingAnimation;
