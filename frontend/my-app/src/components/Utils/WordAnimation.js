import { useEffect } from "react";
import "./WordAnimation.css";

const WordAnimation = () => {
  useEffect(() => {
    const words = document.querySelectorAll(".word");

    if (words.length === 0) {
      console.error("No elements with class 'word' found!");
      return;
    }

    words.forEach((wordElement) => {
      const letters = wordElement.textContent.split("");
      wordElement.textContent = "";
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        wordElement.append(span);
      });
    });

    let currentWordIndex = 0;
    const maxWordIndex = words.length - 1;

    words[currentWordIndex].style.opacity = "1";

    const rotateText = () => {
      const currentWord = words[currentWordIndex];
      const nextWord =
        currentWordIndex === maxWordIndex
          ? words[0]
          : words[currentWordIndex + 1];

      // Rotate out letters of current word
      Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
          letter.className = "letter out";
        }, i * 80);
      });

      // Reveal and rotate in letters of next word
      nextWord.style.opacity = "1";
      Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
          letter.className = "letter in";
        }, 340 + i * 80);
      });

      currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    const interval = setInterval(rotateText, 1618);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-text">
      <p>
        <span className="word alizarin">Student.</span>
        <span className="word wisteria">Son.</span>
        <span className="word peter-river">Brother.</span>
        <span className="word emerald">Creator.</span>
        <span className="word sun-flower">Artist.</span>
      </p>
    </div>
  );
};

export default WordAnimation;
