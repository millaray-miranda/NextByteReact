import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

// Credenciales de demo para el prototipo de login
const DEMO_USERS = [
  { email: "admin@admin.cl", password: "1234", role: "ADMIN", name: "Administrador" },
  { email: "user@user.cl", password: "1234", role: "USER", name: "Usuario" },
];

const STORAGE_KEY = "currentUser";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // Cargar usuario persistido
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setCurrentUser(JSON.parse(raw));
    } catch (_) {
      // noop
    }
  }, []);

  // Persistir usuario al cambiar
  useEffect(() => {
    try {
      if (currentUser) localStorage.setItem(STORAGE_KEY, JSON.stringify(currentUser));
      else localStorage.removeItem(STORAGE_KEY);
    } catch (_) {
      // noop
    }
  }, [currentUser]);

  const login = async (email, password) => {
    // Simula llamada a API: validamos contra usuarios de demo
    const found = DEMO_USERS.find(
      (u) => u.email.toLowerCase() === String(email).toLowerCase() && u.password === password
    );
    if (!found) return { ok: false, error: "Credenciales inválidas" };
    const user = { email: found.email, role: found.role, name: found.name };
    setCurrentUser(user);
    return { ok: true, user };
  };

  const logout = () => setCurrentUser(null);

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: !!currentUser,
      role: currentUser?.role ?? null,
      login,
      logout,
    }),
    [currentUser]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth debe usarse dentro de <AuthProvider>");
  return ctx;
};
