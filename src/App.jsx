import { useState } from "react";
import "./App.css";

function App() {
  const [word, setWord] = useState();
  const [welcomeText, setWelcomeText] = useState("Greeting Message");

  return (
    <div className="App">
      <div className="greeting-container">{welcomeText}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          onChange={(input) => setWord(input.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={() => setWelcomeText(word)}>Update text</button>
      </div>
    </div>
  );
}

export default App;
