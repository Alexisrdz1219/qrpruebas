import { useEffect, useState } from "react";
import localforage from "localforage";
import type { Refaccion } from "./types/Refaccion";
import AppRoutes from "./routes";

// Configuración de la base de datos (IndexedDB)
localforage.config({
  name: "IEMCO_DB",
  version: 1.0,
  storeName: "inventario",
  description: "Almacenamiento de refacciones con soporte para imágenes pesadas"
});

function App() {
  const [refacciones, setRefacciones] = useState<Refaccion[]>([]);
  const [cargando, setCargando] = useState(true);

  // 1️⃣ Cargar desde IndexedDB al iniciar la app
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const data = await localforage.getItem<Refaccion[]>("refacciones");
        if (data) {
          setRefacciones(data);
        }
      } catch (error: any) {
        // Corregido: Agregamos tipo 'any' para evitar error TS7006 en Vercel
        console.error("Error al cargar desde IndexedDB:", error);
      } finally {
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // 2️⃣ Guardar automáticamente cada vez que cambien (solo si terminó de cargar)
  useEffect(() => {
    if (!cargando) {
      localforage.setItem("refacciones", refacciones).catch((error: any) => {
        // Corregido: Agregamos tipo 'any' para evitar error TS7006 en Vercel
        console.error("Error al guardar en IndexedDB:", error);
      });
    }
  }, [refacciones, cargando]);

  // Pantalla de carga mientras IndexedDB responde
  if (cargando) {
    return (
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#f0f2f5" }}>
        <div className="text-center">
          <div className="spinner-border text-success" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="mt-3 fw-bold text-muted">Iniciando IEMCO v1.0...</p>
        </div>
      </div>
    );
  }

  return (
    <AppRoutes
      refacciones={refacciones}
      setRefacciones={setRefacciones}
    />
  );
}

export default App;
