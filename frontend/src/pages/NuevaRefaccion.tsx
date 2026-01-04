// import { useState } from "react";
// import { TextField, Button, Container, Typography } from "@mui/material";
// import type { Refaccion } from "../types/Refaccion";

// interface Props {
//   refacciones: Refaccion[];
//   setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
// }

// export default function NuevaRefaccion({ refacciones, setRefacciones }: Props) {
//   const [nombre, setNombre] = useState("");
//   const [ubicacion, setUbicacion] = useState("");
//   const [cantidad, setCantidad] = useState(0);

//   const agregar = () => {
//     const nueva: Refaccion = {
//       id: `REF-${Date.now()}`,
//       nombre,
//       ubicacion,
//       cantidad,
//     };

//     setRefacciones([...refacciones, nueva]);

//     setNombre("");
//     setUbicacion("");
//     setCantidad(0);

//     console.log("Refacciones:", refacciones);

//   };

//   return (
//     <Container>
//       <Typography variant="h5" mt={4}>
//         Nueva Refacción
//       </Typography>

//       <TextField fullWidth label="Nombre" margin="normal" value={nombre} onChange={e => setNombre(e.target.value)} />
//       <TextField fullWidth label="Ubicación" margin="normal" value={ubicacion} onChange={e => setUbicacion(e.target.value)} />
//       <TextField fullWidth type="number" label="Cantidad" margin="normal" value={cantidad} onChange={e => setCantidad(Number(e.target.value))} />

//       <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={agregar}>
//         Agregar
//       </Button>
//     </Container>
//   );
// }
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import type { Refaccion } from "../types/Refaccion";

// interface Props {
//   refacciones: Refaccion[];
//   setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
// }

// export default function NuevaRefaccion({
//   refacciones,
//   setRefacciones
// }: Props) {

//   const [form, setForm] = useState<Omit<Refaccion, "id">>({
//     nombre: "",
//     codigo: "",
//     categoria: "Mecánica",
//     estado: "Nueva (En Stock)",
//     maquinas: "",
//     medidas: "",
//     cantidad: 1,
//     proveedor: "",
//     ubicacion: "",
//     historial: "",
//     descripcion: "",
//     imagen1: "",
//     imagen2: ""
//   });

//   const handleChange = (campo: keyof typeof form, valor: unknown) => {
//     setForm(prev => ({ ...prev, [campo]: valor }));
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

//   const obtenerSiguienteId = () => {
//   if (refacciones.length === 0) return "1";

//   const maxId = Math.max(
//     ...refacciones.map(r => Number(r.id))
//   );

//   return String(maxId + 1);
// };

//  const agregar = () => {
//   const nueva: Refaccion = {
//     id: obtenerSiguienteId(),
//     ...form
//   };

//   setRefacciones(prev => [...prev, nueva]);

//   setForm({
//     nombre: "",
//     codigo: "",
//     categoria: "Mecánica",
//     estado: "Nueva (En Stock)",
//     maquinas: "",
//     medidas: "",
//     cantidad: 1,
//     proveedor: "",
//     ubicacion: "",
//     historial: "",
//     descripcion: "",
//     imagen1: "",
//     imagen2: ""
//   });
// };


//   return (
//     <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
//       {/* 2. CONTENIDO PRINCIPAL - Se expande al 100% del resto de la pantalla */}
//       <div className="flex-grow-1 d-flex flex-column overflow-auto">
      
//       {/* TOPBAR FLUIDA */}
//         <header className="navbar navbar-expand bg-white border-bottom px-4 py-3 sticky-top shadow-sm w-100">
//           <div className="container-fluid px-0">
        
//           <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50">v1.0</small></span>
//       <h1 className="text-white-50">ddsoiuytrtyuiuytrertyui</h1>
//             <h5 className="mb-0 fw-bold">Nueva Refaccion</h5>
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
// <main className="container-fluid p-4">
//       <div className="card shadow-sm">
//         <div className="card-body">
//           <div className="row g-3">

//             {/* Nombre */}
//             <div className="col-md-6">
//               <label className="form-label">Nombre de la Pieza</label>
//               <input
//                 className="form-control"
//                 value={form.nombre}
//                 onChange={e => handleChange("nombre", e.target.value)}
//               />
//             </div>

//             {/* Código */}
//             <div className="col-md-6">
//               <label className="form-label">Número de Serie / Código</label>
//               <input
//                 className="form-control"
//                 value={form.codigo}
//                 onChange={e => handleChange("codigo", e.target.value)}
//               />
//             </div>

//             {/* Categoría */}
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

//             {/* Estado */}
//             <div className="col-md-6">
//               <label className="form-label">Estado de la Pieza</label>
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

//             {/* Máquinas */}
//             <div className="col-md-6">
//               <label className="form-label">Máquinas Compatibles</label>
//               <input
//                 className="form-control"
//                 value={form.maquinas}
//                 onChange={e => handleChange("maquinas", e.target.value)}
//               />
//             </div>

//             {/* Medidas */}
//             <div className="col-md-6">
//               <label className="form-label">Medidas</label>
//               <input
//                 className="form-control"
//                 value={form.medidas}
//                 onChange={e => handleChange("medidas", e.target.value)}
//               />
//             </div>

//             {/* Cantidad */}
//             <div className="col-md-6">
//               <label className="form-label">Cantidad</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 value={form.cantidad}
//                 onChange={e => handleChange("cantidad", Number(e.target.value))}
//               />
//             </div>

//             {/* Proveedor */}
//             <div className="col-md-6">
//               <label className="form-label">Proveedor</label>
//               <input
//                 className="form-control"
//                 value={form.proveedor}
//                 onChange={e => handleChange("proveedor", e.target.value)}
//               />
//             </div>

//             {/* Ubicación */}
//             <div className="col-12">
//               <label className="form-label">Ubicación en Almacén</label>
//               <input
//                 className="form-control"
//                 value={form.ubicacion}
//                 onChange={e => handleChange("ubicacion", e.target.value)}
//               />
//             </div>

//             {/* Historial */}
//             <div className="col-12">
//               <label className="form-label">Historial</label>
//               <input
//                 className="form-control"
//                 value={form.historial}
//                 onChange={e => handleChange("historial", e.target.value)}
//               />
//             </div>

//             {/* Descripción */}
//             <div className="col-12">
//               <label className="form-label">Descripción</label>
//               <textarea
//                 className="form-control"
//                 rows={3}
//                 value={form.descripcion}
//                 onChange={e => handleChange("descripcion", e.target.value)}
//               />
//             </div>

//             {/* Imagen 1 */}
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

//             {/* Imagen 2 */}
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

//             {/* Botón */}
//             <div className="col-12">
//               <button
//                 className="btn btn-success w-10 btn-lg mt-2"
//                 onClick={agregar}
//               >
//                 Guardar Registro
//               </button>
//             </div>

//           </div>
//         </div>
//       </div>
//       </main>
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
import { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Refaccion } from "../types/Refaccion";

interface Props {
  refacciones: Refaccion[];
  setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
}

export default function NuevaRefaccion({
  refacciones,
  setRefacciones
}: Props) {

  const [form, setForm] = useState<Omit<Refaccion, "id">>({
    nombre: "",
    codigo: "",
    categoria: "Mecánica",
    estado: "Nueva (En Stock)",
    maquinas: "",
    medidas: "",
    cantidad: 1,
    proveedor: "",
    ubicacion: "",
    historial: "",
    descripcion: "",
    imagen1: "",
    imagen2: ""
  });

  const [status, setStatus] = useState(false);

  const handleChange = (campo: keyof typeof form, valor: unknown) => {
    setForm(prev => ({ ...prev, [campo]: valor }));
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

  const obtenerSiguienteId = () => {
    if (refacciones.length === 0) return "1";
    const maxId = Math.max(...refacciones.map(r => Number(r.id)));
    return String(maxId + 1);
  };

  const agregar = () => {
    if (!form.nombre) return alert("El nombre es obligatorio");
    
    const nueva: Refaccion = {
      id: obtenerSiguienteId(),
      ...form
    };

    setRefacciones(prev => [...prev, nueva]);
    setStatus(true);
    setTimeout(() => setStatus(false), 3000); // Alerta de éxito temporal

    setForm({
      nombre: "", codigo: "", categoria: "Mecánica", estado: "Nueva (En Stock)",
      maquinas: "", medidas: "", cantidad: 1, proveedor: "", ubicacion: "",
      historial: "", descripcion: "", imagen1: "", imagen2: ""
    });
  };

  return (
    <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
        
        {/* TOPBAR RESPONSIVA */}
        <header className="navbar navbar-expand bg-white border-bottom px-3 px-md-4 py-3 sticky-top shadow-sm w-100">
          <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
            <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50 d-none d-sm-inline">v1.0</small></span>
            <div className="ms-auto d-flex align-items-center gap-2">
              <Link to="/" className="btn btn-sm btn-success">Inicio</Link>
              <button type="button" className="btn btn-sm btn-dark position-relative">
                Stock <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">4+</span>
              </button>
            </div>
          </div>
        </header>

        <main className="container-fluid p-3 p-md-4">
          
          {status && (
            <div className="alert alert-success shadow-sm mb-3 animate__animated animate__fadeIn">
              ✅ Refacción guardada correctamente.
            </div>
          )}

          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-header bg-white py-3">
              <h5 className="mb-0 fw-bold">Registro de Nueva Refacción</h5>
            </div>
            <div className="card-body p-3 p-md-4">
              <div className="row g-3">

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Nombre de la Pieza</label>
                  <input className="form-control form-control-lg fs-6" placeholder="Ej. Rodamiento 6204" value={form.nombre} onChange={e => handleChange("nombre", e.target.value)} />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Número de Serie / Código</label>
                  <input className="form-control form-control-lg fs-6" placeholder="COD-001" value={form.codigo} onChange={e => handleChange("codigo", e.target.value)} />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Categoría</label>
                  <select className="form-select form-control-lg fs-6" value={form.categoria} onChange={e => handleChange("categoria", e.target.value)}>
                    {["Hidráulica", "Neumática", "Eléctrica", "Mecánica", "Consumibles"].map(op => (
                      <option key={op}>{op}</option>
                    ))}
                  </select>
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Estado de la Pieza</label>
                  <select className="form-select form-control-lg fs-6" value={form.estado} onChange={e => handleChange("estado", e.target.value)}>
                    {["Nueva (En Stock)", "Reparada", "En Mantenimiento", "Crítica (Baja)"].map(op => (
                      <option key={op}>{op}</option>
                    ))}
                  </select>
                </div>

                <div className="col-6 col-md-3">
                  <label className="form-label small fw-bold text-muted">Cantidad</label>
                  <input type="number" className="form-control form-control-lg fs-6" value={form.cantidad} onChange={e => handleChange("cantidad", Number(e.target.value))} />
                </div>

                <div className="col-6 col-md-9">
                  <label className="form-label small fw-bold text-muted">Ubicación</label>
                  <input className="form-control form-control-lg fs-6" placeholder="Pasillo A / Estante 2" value={form.ubicacion} onChange={e => handleChange("ubicacion", e.target.value)} />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Máquinas Compatibles</label>
                  <input className="form-control" value={form.maquinas} onChange={e => handleChange("maquinas", e.target.value)} />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Medidas</label>
                  <input className="form-control" placeholder="Ej. 20x40x12 mm" value={form.medidas} onChange={e => handleChange("medidas", e.target.value)} />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-bold text-muted">Descripción</label>
                  <textarea className="form-control" rows={2} value={form.descripcion} onChange={e => handleChange("descripcion", e.target.value)} />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Imagen Frontal</label>
                  <input type="file" className="form-control form-control-sm" accept="image/*" onChange={e => handleImage(e, "imagen1")} />
                  {form.imagen1 && <img src={form.imagen1} className="img-thumbnail mt-2" style={{maxHeight: '150px'}} />}
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label small fw-bold text-muted">Imagen Detalle</label>
                  <input type="file" className="form-control form-control-sm" accept="image/*" onChange={e => handleImage(e, "imagen2")} />
                  {form.imagen2 && <img src={form.imagen2} className="img-thumbnail mt-2" style={{maxHeight: '150px'}} />}
                </div>

                <div className="col-12 pt-3">
                  <button className="btn btn-success btn-lg w-100 shadow" onClick={agregar}>
                    🚀 Guardar Registro
                  </button>
                </div>

              </div>
            </div>
          </div>
        </main>
      </div>

      <style>
        {`
          .form-label { margin-bottom: 0.2rem; }
          .form-control:focus { border-color: #198754; box-shadow: 0 0 0 0.2rem rgba(25, 135, 84, 0.15); }
          .card { border-radius: 12px; }
          @media (max-width: 576px) {
            .btn-lg { font-size: 1.1rem; padding: 12px; }
          }
        `}
      </style>
    </div>
  );
}
