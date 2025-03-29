import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import TypingAnimation from "./components/TypingAnimation/TypingAnimation";
import LandingPage from "./components/Pages/LandingPage";
import Home from "./components/Pages/Home";
import RMA from "./components/Pages/RMA";
// const TypingAnimation = lazy(() =>
//   import("./components/TypingAnimation/TypingAnimation")
// );
const Projects = lazy(() => import("./components/Pages/Projects"));
const Hobbies = lazy(() => import("./components/Pages/Hobbies"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {/* Intro Animation Route */}
          <Route path="/" element={<TypingAnimation />} />
          {/* Landing Page Route */}
          <Route path="/home" element={<Home />} />

          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/rma" element={<RMA />} />
        </Routes>
      </Suspense>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
