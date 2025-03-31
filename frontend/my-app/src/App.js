import "./App.css";
import React, { useState, useRef } from "react";
import "./index.css";

function App() {
  const [showTypingAnimation, setShowTypingAnimation] = useState(true);
  const [on, setOn] = useState(true);
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);

  return <div className="App"></div>;
}

export default App;
