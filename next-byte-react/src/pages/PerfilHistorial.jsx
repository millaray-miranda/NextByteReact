import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { compras } from "../data/historialData";
import "../assets/css/historial.css";

const PerfilHistorial = () => {
  const { currentUser } = useAuth();
  const [q, setQ] = useState("");

  const data = useMemo(() => {
    const email = currentUser?.email || "";
    const needle = q.toLowerCase();
    return compras
      .filter((c) => c.userEmail === email)
      .filter((c) => c.producto.toLowerCase().includes(needle) || c.estado.toLowerCase().includes(needle));
  }, [q, currentUser]);

  return (
    <div className="historial-container">
      <h1 className="historial-title">Mi historial</h1>
      <div className="busqueda-bar">
        <input type="text" placeholder="Buscar" value={q} onChange={(e) => setQ(e.target.value)} />
        <button onClick={() => setQ("")}>Limpiar</button>
      </div>
      <div id="compras-list">
        {data.length === 0 ? (
          <p style={{ marginTop: 12 }}>Aún no tienes compras que coincidan.</p>
        ) : (
          data.map((c) => (
            <div className="compra-item" key={c.id}>
              <img className="compra-img" src={c.imagen} alt="prod" />
              <div className="compra-info">
                <div className="compra-nombre">{c.producto}</div>
                <div className="compra-fecha">Fecha: {c.fecha}</div>
              </div>
              <span className={`compra-estado estado-${c.estado.toLowerCase()}`}>{c.estado}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PerfilHistorial;
