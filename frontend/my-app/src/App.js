import "./App.css";
import React, { useState, useRef } from "react";
import TypingAnimation from "./components/TypingAnimation/TypingAnimation";
import LandingPage from "./components/LandingPage/LandingPage";
import { CSSTransition } from "react-transition-group";
import "./index.css";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  const handleAnimationComplete = () => {
    setShowTypingAnimation(false);
    setShowLandingPage(true); // Trigger LandingPage after TypingAnimation completes
  };

  return (
    <div className="App">
      {/* Typing Animation Component with Transition */}
      <CSSTransition
        nodeRef={nodeRef2}
        in={showTypingAnimation}
        timeout={200} // Fade-out duration
        classNames="animation"
        unmountOnExit
      >
        <TypingAnimation ref={nodeRef2} onComplete={handleAnimationComplete} />
      </CSSTransition>

      {/* Landing Page Component with Transition */}
      <CSSTransition
        nodeRef={nodeRef1}
        in={showLandingPage}
        timeout={200}
        classNames="my-node"
      >
        <LandingPage ref={nodeRef1} />
      </CSSTransition>
    </div>
  );
}

export default App;
