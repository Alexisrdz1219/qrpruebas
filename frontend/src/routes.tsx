import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventario from "./pages/Inventario";
import NuevaRefaccion from "./pages/NuevaRefaccion";
import type { Refaccion } from "./types/Refaccion";
import EditarInventario from "./pages/EditarInventario";
import DetalleRefaccion from "./pages/DetalleRefaccion";
import EditarRefaccion from "./pages/EditarRefaccion";









interface Props {
  refacciones: Refaccion[];
  setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
}

export default function AppRoutes({ refacciones, setRefacciones }: Props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/inventario"
          element={<Inventario refacciones={refacciones} />}
        />
        <Route
          path="/nueva"
          element={
            <NuevaRefaccion
              refacciones={refacciones}
              setRefacciones={setRefacciones}
            />
          }
        />
        <Route path="/editar" element={
  <EditarInventario
    refacciones={refacciones}
    setRefacciones={setRefacciones}
  />
  
} />
<Route path="/inventario/:id" element={
  <DetalleRefaccion refacciones={refacciones} />
} />
<Route
  path="/inventario/editar/:id"
  element={
    <EditarRefaccion
      refacciones={refacciones}
      setRefacciones={setRefacciones}
    />
  }
/>
      </Routes>
    </BrowserRouter>
  );
}
