import { useState } from "react";
import Methodology from "./Methodology";
import About from "./About";
import InterpretingResults from "./InterpretingResults";
import Quiz from "./Quiz";
import Login from "./Login";
import MyResults from "./MyResults";

export default function App() {
  const [page, setPage] = useState("quiz");

  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem("user"));
  });

  const handleQuizComplete = (result) => {
    localStorage.setItem("pendingResult", JSON.stringify(result));

    if (!user) {
      setPage("login");
    } else {
      localStorage.setItem("savedResult", JSON.stringify(result));
      localStorage.removeItem("pendingResult");
      setPage("my-results");
    }
  };

  const handleLogin = (email) => {
    const newUser = { email };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);

    const pendingResult = JSON.parse(localStorage.getItem("pendingResult"));

    if (pendingResult) {
      localStorage.setItem("savedResult", JSON.stringify(pendingResult));
      localStorage.removeItem("pendingResult");
      setPage("my-results");
    } else {
      setPage("quiz");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setPage("quiz");
  };

  const renderPage = () => {
    if (page === "quiz") return <Quiz onComplete={handleQuizComplete} />;
    if (page === "methods") return <Methodology />;
    if (page === "results") return <InterpretingResults />;
    if (page === "about") return <About />;
    if (page === "login") return <Login onLogin={handleLogin} />;
    if (page === "my-results") return <MyResults />;
  };

  return (
    <div>
      <nav className="navbar">
        <button onClick={() => setPage("quiz")}>Take the Quiz</button>
        <button onClick={() => setPage("methods")}>Methodology</button>
        <button onClick={() => setPage("results")}>Interpreting Results</button>
        <button onClick={() => setPage("about")}>About</button>

        {user && (
          <button onClick={() => setPage("my-results")}>My Results</button>
        )}

        {!user ? (
          <button onClick={() => setPage("login")}>Log In</button>
        ) : (
          <button onClick={handleLogout}>Log Out</button>
        )}
      </nav>

      <div className="page">{renderPage()}</div>
    </div>
  );
}