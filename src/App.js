import "./index.css";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <div className="App">
        <Header />
        <Home />
      </div>
    )
  );
}

export default App;
