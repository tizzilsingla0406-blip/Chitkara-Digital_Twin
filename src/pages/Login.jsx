
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { loginUser, clearAuthError } from "../redux/authSlice";
import "../Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  useEffect(() => {
    return () => {
      dispatch(clearAuthError());
    };
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!email.trim() || !password) {
      setFormError("Please enter your email and password.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setFormError("Please enter a valid email address.");
      return;
    }

    const result = await dispatch(
      loginUser({
        email: email.trim(),
        password,
      })
    );

    if (loginUser.fulfilled.match(result)) {
      navigate(from, { replace: true });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-brand">
          <div className="login-logo">
            <img
              src="/chitkara_logo.png"
              width="200"
              alt="Chitkara University Logo"
            />
          </div>
        </div>

        <h1>Welcome Back!</h1>

        <p className="login-subtitle">
          Sign in to explore your campus digital twin.
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password</label>

          <div className="password-wrapper">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              className="password-toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={
                showPassword ? "Hide password" : "Show password"
              }
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {(formError || error) && (
            <p className="login-error" role="alert">
              {formError || error}
            </p>
          )}

          <button
            type="submit"
            className="login-button"
            disabled={loading}
          >
            {loading ? "logging in..." : "Login"}
          </button>
        </form>

        <div className="demo-info">
          <strong>Demo account</strong>
          <p>Email: demo@chitkara.edu.in</p>
          <p>Password: Chitkara@123</p>
        </div>

        <p className="login-footer">
          Explore campus services? <Link to="/">Go to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
