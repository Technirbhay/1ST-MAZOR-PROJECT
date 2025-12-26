import { useState, useContext } from "react";
import { loginUser } from "../services/auth";
import { AuthContext } from "../context/AuthContext";
import "../styles/auth.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await loginUser({ email, password });
      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={submitHandler}>
        <h2>Login</h2>

        <input placeholder="Email" value={email}
          onChange={(e) => setEmail(e.target.value)} />

        <input type="password" placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />

        <button className="auth-btn">Login</button>

        {error && <p className="auth-msg">{error}</p>}

        <div className="auth-link">
          New user? <Link to="/register">Register</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
