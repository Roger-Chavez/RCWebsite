import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Roger Chavez</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Roger Chavez's website is under construction.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
