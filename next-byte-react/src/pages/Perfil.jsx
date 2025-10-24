import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Perfil = () => {
	const { currentUser } = useAuth();
	if (!currentUser) return null;

	return (
		<section className="page-section" style={{ maxWidth: 900, margin: "24px auto", padding: "0 16px" }}>
			<h1 style={{ color: "#3d0a77", fontWeight: 800, fontSize: 32 }}>Mi Perfil</h1>

			<div className="card" style={{ background: "#fff", padding: 16, borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,.08)" }}>
				<p><strong>Nombre:</strong> {currentUser.name}</p>
				<p><strong>Correo:</strong> {currentUser.email}</p>
				<p><strong>Rol:</strong> {currentUser.role}</p>
			</div>

			<div style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", marginTop: 16 }}>
				<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,.08)", padding: 16 }}>
					<h3 style={{ marginBottom: 8, color: "#3d0a77" }}>Mis envíos</h3>
					<p>Seguimiento de tus envíos.</p>
					<Link to="/perfil/envios" style={{ display: "inline-block", marginTop: 10, background: "#3d0a77", color: "#fff", padding: "8px 14px", borderRadius: 8, textDecoration: "none" }}>Ver mis envíos</Link>
				</div>
				<div style={{ background: "#fff", borderRadius: 12, boxShadow: "0 2px 10px rgba(0,0,0,.08)", padding: 16 }}>
					<h3 style={{ marginBottom: 8, color: "#3d0a77" }}>Mi historial</h3>
					<p>Compras realizadas.</p>
					<Link to="/perfil/historial" style={{ display: "inline-block", marginTop: 10, background: "#3d0a77", color: "#fff", padding: "8px 14px", borderRadius: 8, textDecoration: "none" }}>Ver mi historial</Link>
				</div>
			</div>
		</section>
	);
};

export default Perfil;
