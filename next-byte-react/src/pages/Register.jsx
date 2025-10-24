import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/auth.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Registro de demostración
    setTimeout(() => {
      setLoading(false);
      alert("Cuenta creada. Ahora puedes iniciar sesión.");
      navigate("/login", { replace: true });
    }, 600);
  };

  return (
    <div className="auth-wrap">
      <div className="auth-card">
        <button className="auth-close" onClick={() => navigate(-1)}>×</button>
        <h1 className="auth-title">Registrarse</h1>

        <form onSubmit={handleSubmit} className="auth-form">
          <input
            className="auth-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre completo"
            required
          />
          <input
            className="auth-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
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

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <div className="auth-switch">
          ¿Ya tienes cuenta? {" "}
          <button className="link" type="button" onClick={() => navigate("/login")}>Inicia sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Register;
