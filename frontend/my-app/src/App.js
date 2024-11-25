import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import TypingAnimation from "./components/TypingAnimation/TypingAnimation";
import LandingPage from "./components/LandingPage/LandingPage";
import { CSSTransition } from "react-transition-group";
import "./index.css";
import GoldenRuleSpiral from "./components/Utils/GoldenRuleSpiral";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  const handleAnimationComplete = () => {
    setShowTypingAnimation(false);
    setShowLandingPage(true); // Trigger LandingPage after TypingAnimation completes
  };

  useEffect(() => {
    if (nodeRef2.current) {
      const { width, height } = nodeRef2.current.getBoundingClientRect();
      setDimensions({ width, height }); // Update state with the dimensions
    }
  }, []);

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
      {showLandingPage ? (
        <>
          {/* Landing Page Component with Transition */}
          <CSSTransition
            nodeRef={nodeRef1}
            in={showLandingPage}
            timeout={1000}
            classNames="my-node"
          >
            <LandingPage ref={nodeRef1} />
          </CSSTransition>
          <GoldenRuleSpiral width={800} height={494} orientation="horizontal" />
        </>
      ) : null}
    </div>
  );
}

export default App;
