import React, { useState, useEffect, useRef, forwardRef } from "react";
import style from "./TypingAnimation.module.css";
import { Container, Button } from "@mui/material";
import { useNavigate } from "react-router";

const TypingAnimation = forwardRef(({ onComplete }, ref) => {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Roger Chavez. Welcome to my website!";
  const typingSpeed = 89; // Typing speed in ms
  const indexRef = useRef(0);
  const currentText = useRef("");
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < fullText.length) {
        // Update the current text
        currentText.current += fullText[indexRef.current];
        setText(currentText.current);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        navigate("/home");
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, [fullText, typingSpeed, navigate]);

  const clickHandler = () => {
    navigate("/home");
  };

  // Display a button on the bottom that says skip and plays a loading bar witin the button
  // that shows how fast the animation is moving - really the percentage is based on the chars in a string
  return (
    <>
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
      <Button
        onClick={clickHandler}
        className={style.anchorButton}
        variant="outlined"
      >
        Skip
      </Button>
    </>
  );
});

export default TypingAnimation;
