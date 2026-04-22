import { useState } from "react";
import Methodology from "./Methodology";
import About from "./About";
import InterpretingResults from "./InterpretingResults";
import Quiz from "./Quiz";

export default function App() {
  const [page, setPage] = useState("quiz");

  const renderPage = () => {
    if (page === "quiz") return <Quiz />;
    if (page === "methods") return <Methodology />;
    if (page === "results") return <InterpretingResults />;
    if (page === "about") return <About />;
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => setPage("quiz")}>Take the Quiz</button>
        <button onClick={() => setPage("methods")}>Methodology</button>
        <button onClick={() => setPage("results")}>Interpreting Results</button>
        <button onClick={() => setPage("about")}>About</button>
      </nav>

      <div className="page">{renderPage()}</div>
    </div>
  );
}