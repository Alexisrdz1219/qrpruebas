// import { useState } from "react";
// import type { Refaccion } from "./types/Refaccion";
// import AppRoutes from "./routes";

// function App() {
//   const [refacciones, setRefacciones] = useState<Refaccion[]>([]);

//   return (
//     <AppRoutes
//       refacciones={refacciones}
//       setRefacciones={setRefacciones}
//     />
//   );
// }

// export default App;
// import { useEffect, useState } from "react";
// import type { Refaccion } from "./types/Refaccion";
// import AppRoutes from "./routes";

// function App() {
//   // 1️⃣ Cargar desde localStorage al iniciar la app
//   const [refacciones, setRefacciones] = useState<Refaccion[]>(() => {
//     const data = localStorage.getItem("refacciones");
//     return data ? JSON.parse(data) : [];
//   });

//   // 2️⃣ Guardar automáticamente cada vez que cambien
//   useEffect(() => {
//     localStorage.setItem("refacciones", JSON.stringify(refacciones));
//   }, [refacciones]);

//   return (
//     <AppRoutes
//       refacciones={refacciones}
//       setRefacciones={setRefacciones}
//     />
//   );
// }

// export default App;
import { useEffect, useState } from "react";
import localforage from "localforage";
import type { Refaccion } from "./types/Refaccion";
import AppRoutes from "./routes";

// Configuración opcional de la base de datos
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
      } catch (error) {
        console.error("Error al cargar desde IndexedDB:", error);
      } finally {
        // Una vez que intentamos cargar, marcamos como terminado
        setCargando(false);
      }
    };

    cargarDatos();
  }, []);

  // 2️⃣ Guardar automáticamente cada vez que cambien (solo si terminó de cargar)
  useEffect(() => {
    if (!cargando) {
      localforage.setItem("refacciones", refacciones).catch((error) => {
        console.error("Error al guardar en IndexedDB:", error);
      });
    }
  }, [refacciones, cargando]);

  // Mientras carga la base de datos, mostramos un spinner o pantalla vacía
  if (cargando) {
    return (
      <div className="vh-100 vw-100 d-flex justify-content-center align-items-center bg-light">
        <div className="text-center">
          <div className="spinner-border text-success" role="status"></div>
          <p className="mt-2 fw-bold text-muted">Iniciando base de datos...</p>
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
