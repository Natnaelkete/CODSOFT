import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCredential } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { email, password };
    setCredential(userData);

    navigate("/");
  }

  return (
    <dvi className="login-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          name="password"
          type="password"
          placeholder="password"
        />
        <button>Signup</button>

        <Link to="/signup">Create account</Link>
      </form>
    </dvi>
  );
};

export default Login;
