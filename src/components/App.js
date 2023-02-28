import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <nav>
        <button onClick={toggleMode}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
      </nav>
      <main>
        <h1>Shopping List</h1>
        <ul>
          <li>Eggs</li>
          <li>Bread</li>
          <li>Milk</li>
        </ul>
      </main>
    </div>
  );
}

export default App;
