import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setCredential } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    const userData = { name, email, password };
    navigate("/");
    setCredential(userData);
  }

  return (
    <dvi className="signup-form">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Link to="/login">Already have account?</Link>
      </form>
    </dvi>
  );
};

export default Signup;
