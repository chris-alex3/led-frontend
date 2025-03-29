import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isOn, setIsOn] = useState(false); // State for the toggle switch
  const [time, setTime] = useState(""); // State for "Add Time" input
  const [event, setEvent] = useState(""); // State for "Add Event" input

  // Function to handle saving (for now, just logs to console)
  const handleSaveTime = () => {
    console.log("Saved Time:", time);
    setTime(""); // Clear input after saving
  };

  const handleSaveEvent = () => {
    console.log("Saved Event:", event);
    setEvent(""); // Clear input after saving
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>LED Timeline</h1>
      <div className="card">
      <button onClick={() => setIsOn(!isOn)} className={isOn ? "on" : "off"}>
          {isOn ? "ON" : "OFF"}
        </button>

        {/* Input Fields and Save Buttons */}
      <div className="input-container">
        <label>Add Time:</label>
        <input
          type="text"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Enter time..."
        />
        <button onClick={handleSaveTime} className="save-btn">Save</button>
      </div>

      <div className="input-container">
        <label>Add Event:</label>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter event..."
        />
        <button onClick={handleSaveEvent} className="save-btn">Save</button>
      </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
  /*
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  ) */
}

export default App
