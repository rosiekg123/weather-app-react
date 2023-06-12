import logo from "./logo.svg";
import "./App.css";
import "./styles.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />
    </div>
  );
}
