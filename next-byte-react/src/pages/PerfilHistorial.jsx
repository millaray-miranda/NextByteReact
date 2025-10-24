import React, { useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { compras } from "../data/historialData";
import { productosData } from "../data/productosData";
import logo from "../assets/img/logo.png";
import "../assets/css/historial.css";

const PerfilHistorial = () => {
  const { currentUser } = useAuth();
  const [q, setQ] = useState("");

  // Fallback robusto de imágenes, igual que en Historial de admin
  const onImgError = (ev) => {
    const t = ev.currentTarget;
    t.onerror = null;
    t.src = logo;
  };

  const thumbForCompra = (nombre) => {
    const n = nombre.toLowerCase();
    let p = productosData.find((x) => x.nombre.toLowerCase().includes(n));
    if (p) return p.imagen || logo;
    let categoria = null;
    if (n.includes("tecla")) categoria = "teclados";
    else if (n.includes("mouse")) categoria = "mouses";
    else if (n.includes("monitor")) categoria = "monitores";
    else if (n.includes("silla")) categoria = "sillas";
    if (categoria) {
      p = productosData.find((x) => x.categoria === categoria);
      if (p) return p.imagen || logo;
    }
    return logo;
  };

  const bestThumb = (c) => {
    const fromCatalog = thumbForCompra(c.producto);
    if (fromCatalog && fromCatalog !== logo) return fromCatalog;
    if (c.imagen) return c.imagen;
    return logo;
  };

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
              <img className="compra-img" src={bestThumb(c)} alt="prod" onError={onImgError} />
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
