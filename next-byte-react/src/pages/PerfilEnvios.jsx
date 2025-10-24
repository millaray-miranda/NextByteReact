import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { envios } from "../data/enviosData";
import "../assets/css/envios.css";

const chips = {
  Entregado: "estado-entregado",
  "En camino": "estado-en-camino",
  Pendiente: "estado-pendiente",
};

const PerfilEnvios = () => {
  const { currentUser } = useAuth();
  const [q, setQ] = useState("");

  const data = useMemo(() => {
    const email = currentUser?.email || "";
    const needle = q.toLowerCase();
    return envios
      .filter((e) => e.userEmail === email)
      .filter(
        (e) =>
          e.producto.toLowerCase().includes(needle) ||
          e.direccion.toLowerCase().includes(needle) ||
          e.estado.toLowerCase().includes(needle)
      );
  }, [q, currentUser]);

  return (
    <div className="envios-container">
      <h1 className="envios-title">Mis envíos</h1>
      <div className="busqueda-bar">
        <input placeholder="Buscar" value={q} onChange={(e) => setQ(e.target.value)} />
        <button onClick={() => setQ("")}>Limpiar</button>
      </div>

      {data.length === 0 ? (
        <p style={{ marginTop: 12 }}>No encontramos envíos con esos criterios.</p>
      ) : (
        data.map((e) => (
          <div className="envio-item" key={e.id}>
            <img src={e.imagen} alt="prod" className="envio-img" />
            <div className="envio-info">
              <div className="envio-nombre">{e.producto}</div>
              <div className="envio-fecha">Fecha: {e.fecha}</div>
              <div className="envio-direccion">Dirección: {e.direccion}</div>
            </div>
            <span className={`envio-estado ${chips[e.estado] || ""}`}>{e.estado}</span>
          </div>
        ))
      )}
    </div>
  );
};

export default PerfilEnvios;
