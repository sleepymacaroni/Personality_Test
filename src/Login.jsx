import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email.");
      return;
    }

    onLogin(email);
  };

  return (
    <div className="login-page">
      <h1 className="page-title">Log In to See Your Results</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
}