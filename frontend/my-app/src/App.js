import "./App.css";
import React, { useState, useRef } from "react";
import "./index.css";
import GoldenRuleSpiral from "./components/Utils/GoldenRuleSpiral";

function App() {
  const [showLandingPage, setShowLandingPage] = useState(false);
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const [on, setOn] = useState(true);
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);

  return (
    <div className="App">
      {/* Typing Animation Component with Transition */}

      {/* <TypingAnimation ref={nodeRef2} /> */}
      <GoldenRuleSpiral width={800} height={494} />
    </div>
  );
}

export default App;
