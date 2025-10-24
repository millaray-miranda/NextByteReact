import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../assets/css/auth.css";

const Login = ({ initialMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Login simple
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error || "No se pudo iniciar sesión");
      return;
    }
    const roleDefault = res.user?.role === "ADMIN" ? "/admin" : "/perfil";
    const dest = from && from !== "/login" ? from : roleDefault;
    navigate(dest, { replace: true });
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <button className="auth-close" onClick={() => navigate(-1)}>×</button>
  <h1 className="auth-title">Iniciar sesión</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo o usuario"
            required
          />
          <input
            className="auth-input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña"
            required
          />

          {error && <div className="auth-error">{error}</div>}

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Ingresando..." : "Ingresar"}
          </button>
        </form>

        <div className="auth-switch">
          ¿No tienes cuenta? {" "}
          <button className="link" type="button" onClick={() => navigate("/register")}>
            Regístrate
          </button>
        </div>

        {/* Texto de ayuda eliminado para una vista más profesional */}
      </div>
    </div>
  );
};

export default Login;
