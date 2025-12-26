import { useState } from "react";
import { registerUser } from "../services/auth";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await registerUser({ name, email, password });
      setMsg(res.data.message);
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={submitHandler}>
        <h2>Register</h2>

        <input placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} />

        <input placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button className="auth-btn">Register</button>

        {msg && <p className="auth-msg">{msg}</p>}

        <div className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
