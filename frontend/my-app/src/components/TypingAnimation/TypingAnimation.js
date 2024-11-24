import React, { useState, useEffect, useRef, forwardRef } from "react";
import style from "./TypingAnimation.module.css";

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
    <div ref={ref} className={style.landing}>
      <div className={style.textWrapper}>
        <span className={style.typedText}>
          {text}
          <span className={style.cursor}>▮</span>
        </span>
      </div>
    </div>
  );
});

export default TypingAnimation;
