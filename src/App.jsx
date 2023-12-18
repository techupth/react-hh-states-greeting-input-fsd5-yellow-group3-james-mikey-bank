import "./App.css";
import { useState } from "react";

function App() {
  const [greetingMessage, setGreetingMessage] = useState("Greeting Message");
  const [formData, setFormData] = useState("");

  console.log(formData);

  function handleClick() {
    setGreetingMessage(formData);
    setFormData("");
  }

  return (
    <div className="App">
      <div className="greeting-container">{greetingMessage}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input
          id="greeting-message"
          type="text"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
      </div>

      <div className="buttons">
        <button onClick={handleClick}>Update text</button>
      </div>
    </div>
  );
}

export default App;
