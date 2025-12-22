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
import { useEffect, useState } from "react";
import type { Refaccion } from "./types/Refaccion";
import AppRoutes from "./routes";

function App() {
  // 1️⃣ Cargar desde localStorage al iniciar la app
  const [refacciones, setRefacciones] = useState<Refaccion[]>(() => {
    const data = localStorage.getItem("refacciones");
    return data ? JSON.parse(data) : [];
  });

  // 2️⃣ Guardar automáticamente cada vez que cambien
  useEffect(() => {
    localStorage.setItem("refacciones", JSON.stringify(refacciones));
  }, [refacciones]);

  return (
    <AppRoutes
      refacciones={refacciones}
      setRefacciones={setRefacciones}
    />
  );
}

export default App;
