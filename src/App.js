import React from "react";
import Body from "./Components/Body/Body";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <main>
        <Body />
      </main>
    </div>
  );
};

export default App;
