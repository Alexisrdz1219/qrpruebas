// import { useParams, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import type { Refaccion } from "../types/Refaccion";

// interface Props {
//   refacciones: Refaccion[];
//   setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
// }

// export default function EditarRefaccion({
//   refacciones,
//   setRefacciones
// }: Props) {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const refaccionOriginal = refacciones.find(r => r.id === id);

//   const [form, setForm] = useState<Omit<Refaccion, "id"> | null>(null);

//   useEffect(() => {
//     if (refaccionOriginal) {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { id, ...rest } = refaccionOriginal;
//       // eslint-disable-next-line react-hooks/set-state-in-effect
//       setForm(rest);
//     }
//   }, [refaccionOriginal]);

//   if (!form) {
//     return (
//       <div className="container mt-5">
//         <div className="alert alert-danger">
//           Refacción no encontrada
//         </div>
//         <button
//           className="btn btn-secondary"
//           onClick={() => navigate("/inventario")}
//         >
//           Volver
//         </button>
//       </div>
//     );
//   }

//   const handleChange = (campo: keyof typeof form, valor: unknown) => {
//     setForm(prev => prev ? { ...prev, [campo]: valor } : prev);
//   };

//   const handleImage = (
//     e: React.ChangeEvent<HTMLInputElement>,
//     campo: "imagen1" | "imagen2"
//   ) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onload = () => {
//       handleChange(campo, reader.result as string);
//     };
//     reader.readAsDataURL(file);
//   };

//   const guardarCambios = () => {
//     setRefacciones(prev =>
//       prev.map(r =>
//         r.id === id ? { id: r.id, ...form } : r
//       )
//     );

//     navigate(`/inventario/${id}`);
//   };

//   return (
//     <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
//       {/* 2. CONTENIDO PRINCIPAL - Se expande al 100% del resto de la pantalla */}
//       <div className="flex-grow-1 d-flex flex-column overflow-auto">
      
//       {/* TOPBAR FLUIDA */}
//         <header className="navbar navbar-expand bg-white border-bottom px-4 py-3 sticky-top shadow-sm w-100">
//           <div className="container-fluid px-0">
        
//           <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50">v1.0</small></span>
//       <h1 className="text-white-50">ddsoiuytrtyuiuytrertyui</h1>
//             <h5 className="mb-0 fw-bold">Editar Refacción</h5>
//             <div className="ms-auto d-flex align-items-center gap-3">
//               <input type="search" className="form-control" placeholder="Buscar..." style={{ width: '250px' }} />
//               <Link to="/" className="btn btn-success position-relative">
//                     Inicio
//                   </Link>
//               <button type="button" className="btn btn-dark position-relative">
//   Stock
//   <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
//     4+
//     <span className="visually-hidden">unread messages</span>
//   </span>
// </button>
//             </div>
//           </div>
//         </header>
     

// {/* MAIN CONTENT - Full Width utilizando container-fluid */}
//         <main className="container-fluid p-4">
        
//       <div className="card shadow-sm">
//         <div className="card-body">
//           <div className="row g-3">

//             <div className="col-md-6">
//               <label className="form-label">Nombre</label>
//               <input
//                 className="form-control"
//                 value={form.nombre}
//                 onChange={e => handleChange("nombre", e.target.value)}
//               />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Código / Serie</label>
//               <input
//                 className="form-control"
//                 value={form.codigo}
//                 onChange={e => handleChange("codigo", e.target.value)}
//               />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Categoría</label>
//               <select
//                 className="form-select"
//                 value={form.categoria}
//                 onChange={e => handleChange("categoria", e.target.value)}
//               >
//                 {["Hidráulica", "Neumática", "Eléctrica", "Mecánica", "Consumibles"].map(op => (
//                   <option key={op}>{op}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Estado</label>
//               <select
//                 className="form-select"
//                 value={form.estado}
//                 onChange={e => handleChange("estado", e.target.value)}
//               >
//                 {[
//                   "Nueva (En Stock)",
//                   "Reparada",
//                   "En Mantenimiento",
//                   "Crítica (Baja)"
//                 ].map(op => (
//                   <option key={op}>{op}</option>
//                 ))}
//               </select>
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Cantidad</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 value={form.cantidad}
//                 onChange={e => handleChange("cantidad", Number(e.target.value))}
//               />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Ubicación</label>
//               <input
//                 className="form-control"
//                 value={form.ubicacion}
//                 onChange={e => handleChange("ubicacion", e.target.value)}
//               />
//             </div>

//             <div className="col-12">
//               <label className="form-label">Descripción</label>
//               <textarea
//                 className="form-control"
//                 rows={3}
//                 value={form.descripcion}
//                 onChange={e => handleChange("descripcion", e.target.value)}
//               />
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Imagen Frontal</label>
//               <input
//                 type="file"
//                 className="form-control"
//                 accept="image/*"
//                 onChange={e => handleImage(e, "imagen1")}
//               />
//               {form.imagen1 && (
//                 <img src={form.imagen1} className="img-fluid mt-2 rounded" />
//               )}
//             </div>

//             <div className="col-md-6">
//               <label className="form-label">Imagen Detalle</label>
//               <input
//                 type="file"
//                 className="form-control"
//                 accept="image/*"
//                 onChange={e => handleImage(e, "imagen2")}
//               />
//               {form.imagen2 && (
//                 <img src={form.imagen2} className="img-fluid mt-2 rounded" />
//               )}
//             </div>

//             <div className="col-12 d-flex gap-2">
//               <button
//                 className="btn btn-primary w-100"
//                 onClick={guardarCambios}
//               >
//                 Guardar cambios
//               </button>

//               <button
//                 className="btn btn-outline-secondary w-100"
//                 onClick={() => navigate(-1)}
//               >
//                 Cancelar
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
        
//         </main>
//     </div>
//     {/* Estilos estándar de React (sin el atributo jsx) */}
//       <style>
//         {`
//           .nav-link { transition: 0.2s; color: rgba(255,255,255,0.7); }
//           .nav-link:hover { color: #fff; background: rgba(255,255,255,0.1); }
//           .nav-link.active { background-color: #0dcaf0 !important; color: #000 !important; font-weight: bold; }
//           .table-bordered th, .table-bordered td { border: 1px solid #dee2e6 !important; }
//         `}
//       </style>
//     </div>
//   );
// }
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Refaccion } from "../types/Refaccion";

interface Props {
  refacciones: Refaccion[];
  setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
}

export default function EditarRefaccion({
  refacciones,
  setRefacciones
}: Props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const refaccionOriginal = refacciones.find(r => r.id === id);
  const [form, setForm] = useState<Omit<Refaccion, "id"> | null>(null);

  useEffect(() => {
    if (refaccionOriginal) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { id, ...rest } = refaccionOriginal;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm(rest);
    }
  }, [refaccionOriginal]);

  if (!form) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">
          Refacción no encontrada
        </div>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/inventario")}
        >
          Volver
        </button>
      </div>
    );
  }

  const handleChange = (campo: keyof typeof form, valor: unknown) => {
    setForm(prev => prev ? { ...prev, [campo]: valor } : prev);
  };

  const handleImage = (
    e: React.ChangeEvent<HTMLInputElement>,
    campo: "imagen1" | "imagen2"
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      handleChange(campo, reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const guardarCambios = () => {
    setRefacciones(prev =>
      prev.map(r =>
        r.id === id ? { id: r.id, ...form } : r
      )
    );
    navigate(`/inventario/${id}`);
  };

  return (
    <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
      
        {/* TOPBAR RESPONSIVA */}
        <header className="navbar navbar-expand bg-white border-bottom px-3 px-md-4 py-3 sticky-top shadow-sm w-100">
          <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
            <div>
              <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50 d-none d-sm-inline">v1.0</small></span>
            </div>
            
            <h5 className="mb-0 fw-bold d-none d-lg-block">Editar Refacción</h5>

            <div className="ms-auto d-flex align-items-center gap-2">
              <input type="search" className="form-control d-none d-md-block" placeholder="Buscar..." style={{ width: '180px' }} />
              <Link to="/" className="btn btn-sm btn-success">Inicio</Link>
              <button type="button" className="btn btn-sm btn-dark position-relative">
                Stock
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  4+
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="container-fluid p-3 p-md-4">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-white py-3 d-lg-none">
              <h5 className="mb-0 fw-bold">Editar Refacción</h5>
            </div>
            <div className="card-body p-3 p-md-4">
              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold small">Nombre</label>
                  <input
                    className="form-control form-control-lg fs-6"
                    value={form.nombre}
                    onChange={e => handleChange("nombre", e.target.value)}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold small">Código / Serie</label>
                  <input
                    className="form-control form-control-lg fs-6"
                    value={form.codigo}
                    onChange={e => handleChange("codigo", e.target.value)}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold small">Categoría</label>
                  <select
                    className="form-select form-control-lg fs-6"
                    value={form.categoria}
                    onChange={e => handleChange("categoria", e.target.value)}
                  >
                    {["Hidráulica", "Neumática", "Eléctrica", "Mecánica", "Consumibles"].map(op => (
                      <option key={op}>{op}</option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold small">Estado</label>
                  <select
                    className="form-select form-control-lg fs-6"
                    value={form.estado}
                    onChange={e => handleChange("estado", e.target.value)}
                  >
                    {[
                      "Nueva (En Stock)",
                      "Reparada",
                      "En Mantenimiento",
                      "Crítica (Baja)"
                    ].map(op => (
                      <option key={op}>{op}</option>
                    ))}
                  </select>
                </div>

                <div className="col-6">
                  <label className="form-label fw-semibold small">Cantidad</label>
                  <input
                    type="number"
                    className="form-control form-control-lg fs-6"
                    value={form.cantidad}
                    onChange={e => handleChange("cantidad", Number(e.target.value))}
                  />
                </div>

                <div className="col-6 col-md-6">
                  <label className="form-label fw-semibold small">Ubicación</label>
                  <input
                    className="form-control form-control-lg fs-6"
                    value={form.ubicacion}
                    onChange={e => handleChange("ubicacion", e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label fw-semibold small">Descripción</label>
                  <textarea
                    className="form-control fs-6"
                    rows={3}
                    value={form.descripcion}
                    onChange={e => handleChange("descripcion", e.target.value)}
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold small">Imagen Frontal</label>
                  <input
                    type="file"
                    className="form-control shadow-sm"
                    accept="image/*"
                    onChange={e => handleImage(e, "imagen1")}
                  />
                  {form.imagen1 && (
                    <div className="mt-2 position-relative">
                      <img src={form.imagen1} className="img-thumbnail w-100" style={{maxHeight: '200px', objectFit: 'contain'}} alt="Vista previa 1" />
                    </div>
                  )}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label fw-semibold small">Imagen Detalle</label>
                  <input
                    type="file"
                    className="form-control shadow-sm"
                    accept="image/*"
                    onChange={e => handleImage(e, "imagen2")}
                  />
                  {form.imagen2 && (
                    <div className="mt-2 position-relative">
                      <img src={form.imagen2} className="img-thumbnail w-100" style={{maxHeight: '200px', objectFit: 'contain'}} alt="Vista previa 2" />
                    </div>
                  )}
                </div>

                {/* BOTONES DE ACCIÓN RESPONSIVOS */}
                <div className="col-12 mt-4">
                  <div className="d-grid d-md-flex gap-2">
                    <button
                      className="btn btn-primary btn-lg flex-grow-1"
                      onClick={guardarCambios}
                    >
                      Guardar cambios
                    </button>
                    <button
                      className="btn btn-outline-secondary btn-lg flex-grow-1"
                      onClick={() => navigate(-1)}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>

      <style>
        {`
          .nav-link { transition: 0.2s; color: rgba(255,255,255,0.7); }
          .nav-link:hover { color: #fff; background: rgba(255,255,255,0.1); }
          .form-control:focus, .form-select:focus {
            border-color: #198754;
            box-shadow: 0 0 0 0.25rem rgba(25, 135, 84, 0.25);
          }
          .img-thumbnail { background-color: #f8f9fa; }
        `}
      </style>
    </div>
  );
}
