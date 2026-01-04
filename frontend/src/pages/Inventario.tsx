
// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   Divider,
//   Box,
// } from "@mui/material";
// import { QRCodeSVG } from "qrcode.react";
// import type { Refaccion } from "../types/Refaccion";

// interface Props {
//   refacciones: Refaccion[];
// }

// export default function Inventario({ refacciones }: Props) {
//   return (
//     <Container maxWidth="md">
//       <Typography variant="h4" mt={4} mb={2}>
//         Inventario de Refacciones
//       </Typography>

//       {refacciones.length === 0 && (
//         <Typography>No hay refacciones registradas</Typography>
//       )}

//       {refacciones.map((ref) => (
//         <Card key={ref.id} sx={{ mb: 3 }}>
//           <CardContent>
//             {/* HEADER */}
//             <Box display="flex" justifyContent="space-between" alignItems="center">
//               <Box>
//                 <Typography variant="h6">{ref.nombre}</Typography>
//                 <Typography color="text.secondary">
//                   Código: {ref.codigo}
//                 </Typography>
//               </Box>

//               <QRCodeSVG value={ref.codigo || ref.id} size={90} />
//             </Box>

//             <Divider sx={{ my: 2 }} />

//             {/* INFO PRINCIPAL */}
//             <Typography><b>Categoría:</b> {ref.categoria}</Typography>
//             <Typography><b>Estado:</b> {ref.estado}</Typography>
//             <Typography><b>Cantidad:</b> {ref.cantidad}</Typography>
//             <Typography><b>Ubicación:</b> {ref.ubicacion}</Typography>
//             <Typography><b>Proveedor:</b> {ref.proveedor}</Typography>
//             <Typography><b>Máquinas:</b> {ref.maquinas}</Typography>
//             <Typography><b>Medidas:</b> {ref.medidas}</Typography>

//             <Divider sx={{ my: 2 }} />

//             {/* DESCRIPCIÓN */}
//             <Typography variant="subtitle1"><b>Descripción</b></Typography>
//             <Typography color="text.secondary">
//               {ref.descripcion || "Sin descripción"}
//             </Typography>

//             <Divider sx={{ my: 2 }} />

//             {/* HISTORIAL */}
//             <Typography variant="subtitle1"><b>Historial</b></Typography>
//             <Typography color="text.secondary">
//               {ref.historial || "Sin historial"}
//             </Typography>

//             {/* IMÁGENES */}
//             {(ref.imagen1 || ref.imagen2) && (
//               <>
//                 <Divider sx={{ my: 2 }} />
//                 <Typography variant="subtitle1"><b>Imágenes</b></Typography>

//                 <Box display="flex" gap={2} mt={1}>
//                   {ref.imagen1 && (
//                     <img
//                       src={ref.imagen1}
//                       alt="Imagen 1"
//                       width={120}
//                       style={{ borderRadius: 8 }}
//                     />
//                   )}
//                   {ref.imagen2 && (
//                     <img
//                       src={ref.imagen2}
//                       alt="Imagen 2"
//                       width={120}
//                       style={{ borderRadius: 8 }}
//                     />
//                   )}
//                 </Box>
//               </>
//             )}
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// }
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { useNavigate } from "react-router-dom";
// import type { Refaccion } from "../types/Refaccion";

// interface Props {
//   refacciones: Refaccion[];
// }

// export default function Inventario({ refacciones }: Props) {
//   const navigate = useNavigate();

//   return (
//     <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
//       {/* 2. CONTENIDO PRINCIPAL - Se expande al 100% del resto de la pantalla */}
//       <div className="flex-grow-1 d-flex flex-column overflow-auto">
//        {/* TOPBAR FLUIDA */}
//         <header className="navbar navbar-expand bg-white border-bottom px-4 py-3 sticky-top shadow-sm w-100">
//           <div className="container-fluid px-0">
        
//           <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50">v1.0</small></span>
//       <h1 className="text-white-50">ddsoiuytrtyuiuytrertyui</h1>
//             <h5 className="mb-0 fw-bold">Inventario de Refacciones</h5>
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
          

//       {refacciones.length === 0 ? (
//         <div className="alert alert-secondary">
//           No hay refacciones registradas
//         </div>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-striped table-hover align-middle">
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Pieza</th>
//                 <th>Serie</th>
//                 <th>Cantidad</th>
//                 <th>Ubicación</th>
//                 <th>Estado</th>
//                 <th className="text-center">Ver</th>
//                 <th className="text-center">Editar</th>
//               </tr>
//             </thead>

//             <tbody>
//               {refacciones.map((ref) => (
//                 <tr key={ref.id}>
//                   <td className="small">{ref.id}</td>
//                   <td><strong>{ref.nombre}</strong></td>
//                   <td>{ref.codigo}</td>
//                   <td>{ref.cantidad}</td>
//                   <td>{ref.ubicacion}</td>

//                   <td>
//                     <span
//                       className={`badge ${
//                         ref.estado.includes("Nueva")
//                           ? "bg-success"
//                           : ref.estado.includes("Mantenimiento")
//                           ? "bg-warning text-dark"
//                           : "bg-danger"
//                       }`}
//                     >
//                       {ref.estado}
//                     </span>
//                   </td>

//                   <td className="text-center">
//                     <button
//                       className="btn btn-outline-primary btn-sm"
//                       onClick={() =>
//                         navigate(`/inventario/${ref.id}`)
//                       }
//                     >
//                       Ver
//                     </button>
//                   </td>

//                   <td className="text-center">
//                     <button
//                       className="btn btn-primary btn-sm"
//                       onClick={() =>
//                         navigate(`/inventario/editar/${ref.id}`)
//                       }
//                     >
//                       Editar
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//       </main>
//       </div>
//       {/* Estilos estándar de React (sin el atributo jsx) */}
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
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import type { Refaccion } from "../types/Refaccion";

interface Props {
  refacciones: Refaccion[];
}

export default function Inventario({ refacciones }: Props) {
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
        
        {/* TOPBAR RESPONSIVA */}
        <header className="navbar navbar-expand bg-white border-bottom px-3 px-md-4 py-3 sticky-top shadow-sm w-100">
          <div className="container-fluid px-0 d-flex justify-content-between align-items-center">
            <div>
              <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50 d-none d-sm-inline">v1.0</small></span>
            </div>
            
            <h5 className="mb-0 fw-bold d-none d-lg-block">Inventario de Refacciones</h5>

            <div className="ms-auto d-flex align-items-center gap-2">
              <input type="search" className="form-control d-none d-md-block" placeholder="Buscar..." style={{ width: '180px' }} />
              <Link to="/" className="btn btn-sm btn-success">Inicio</Link>
              <button type="button" className="btn btn-sm btn-dark position-relative">
                Stock
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">4+</span>
              </button>
            </div>
          </div>
        </header>

        <main className="container-fluid p-3 p-md-4">
          <div className="d-flex justify-content-between align-items-center mb-3">
             <h4 className="fw-bold mb-0 d-lg-none">Inventario</h4>
             <Link to="/nueva" className="btn btn-primary btn-sm d-md-none">+ Nueva</Link>
          </div>

          {refacciones.length === 0 ? (
            <div className="alert alert-secondary">No hay refacciones registradas</div>
          ) : (
            <>
              {/* VISTA PARA TABLETS Y PC (TABLA) */}
              <div className="d-none d-md-block table-responsive bg-white rounded-3 shadow-sm">
                <table className="table table-hover align-middle mb-0">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Pieza</th>
                      <th>Serie</th>
                      <th>Stock</th>
                      <th>Ubicación</th>
                      <th>Estado</th>
                      <th className="text-center">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refacciones.map((ref) => (
                      <tr key={ref.id}>
                        <td className="small text-muted">{ref.id.substring(0, 8)}...</td>
                        <td><strong>{ref.nombre}</strong></td>
                        <td>{ref.codigo}</td>
                        <td className="fw-bold">{ref.cantidad}</td>
                        <td><span className="badge bg-light text-dark border">{ref.ubicacion}</span></td>
                        <td>
                          <span className={`badge ${
                            ref.estado.includes("Nueva") ? "bg-success" : 
                            ref.estado.includes("Mantenimiento") ? "bg-warning text-dark" : "bg-danger"
                          }`}>
                            {ref.estado}
                          </span>
                        </td>
                        <td className="text-center">
                          <div className="btn-group">
                            <button className="btn btn-outline-primary btn-sm" onClick={() => navigate(`/inventario/${ref.id}`)}>Ver</button>
                            <button className="btn btn-primary btn-sm" onClick={() => navigate(`/inventario/editar/${ref.id}`)}>Editar</button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* VISTA PARA MÓVILES (CARDS) */}
              <div className="d-md-none">
                {refacciones.map((ref) => (
                  <div key={ref.id} className="card mb-3 shadow-sm border-0">
                    <div className="card-body">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <div>
                          <h6 className="fw-bold mb-0 text-primary">{ref.nombre}</h6>
                          <small className="text-muted">Serie: {ref.codigo}</small>
                        </div>
                        <span className={`badge ${
                          ref.estado.includes("Nueva") ? "bg-success" : 
                          ref.estado.includes("Mantenimiento") ? "bg-warning text-dark" : "bg-danger"
                        }`}>
                          {ref.cantidad} uds
                        </span>
                      </div>
                      
                      <div className="row g-0 py-2 border-top border-bottom my-2">
                        <div className="col-6">
                          <small className="d-block text-muted">Ubicación</small>
                          <span className="small fw-bold">{ref.ubicacion}</span>
                        </div>
                        <div className="col-6 text-end">
                          <small className="d-block text-muted">Estado</small>
                          <span className="small">{ref.estado}</span>
                        </div>
                      </div>

                      <div className="d-flex gap-2 mt-2">
                        <button className="btn btn-outline-primary btn-sm flex-grow-1" onClick={() => navigate(`/inventario/${ref.id}`)}>
                          Ver Detalle
                        </button>
                        <button className="btn btn-primary btn-sm flex-grow-1" onClick={() => navigate(`/inventario/editar/${ref.id}`)}>
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      <style>
        {`
          .table-hover tbody tr:hover { background-color: rgba(25, 135, 84, 0.05); }
          .card { transition: transform 0.2s; }
          .card:active { transform: scale(0.98); }
        `}
      </style>
    </div>
  );
}
