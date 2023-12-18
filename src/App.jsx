import { useState } from "react";
import "./App.css";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("");
  const [eventualMessage, setEventualMessage] = useState("Greeting Message");
  return (
    <div className="App">
      <div className="greeting-container">{eventualMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={greetingMessage}
          onChange={(e) => setGreetingMessage(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={() => setEventualMessage(greetingMessage)}>
          Update text
        </button>
      </div>
    </div>
  );
}

export default App;
