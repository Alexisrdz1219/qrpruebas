// import { Button, Container } from "@mui/material";
// import { Link } from "react-router-dom";

// export default function Dashboard() {
//   return (
//     <Container sx={{ mt: 4 }}>
//       <Button component={Link} to="/nueva" variant="contained">
//         Nueva Refacción
//       </Button>

//       <Button
//         component={Link}
//         to="/inventario"
//         variant="outlined"
//         sx={{ ml: 2 }}
//       >
//         Ver Inventario
//       </Button>
//       {/* <Button
//         component={Link}
//         to="/editar"
//         variant="outlined"
//         sx={{ ml: 2 }}
//       >
//         Editar Inventario
//       </Button> */}
//     </Container>
//   );
// }
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DashboardLemcoFull() {
  return (
    // 'vw-100' asegura que el contenedor principal ocupe todo el ancho de la ventana
    <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
      
     

      {/* 2. CONTENIDO PRINCIPAL - Se expande al 100% del resto de la pantalla */}
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
        
        {/* TOPBAR FLUIDA */}
        <header className="navbar navbar-expand bg-white border-bottom px-4 py-3 sticky-top shadow-sm w-100">
          <div className="container-fluid px-0">
        
          <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50">v1.0</small></span>
      <h1 className="text-white-50">ddsoiuytrtyuiuytrertyui</h1>
            <h5 className="mb-0 fw-bold">Panel de Control</h5>
            <div className="ms-auto d-flex align-items-center gap-3">
              <input type="search" className="form-control" placeholder="Buscar..." style={{ width: '250px' }} />
              <button type="button" className="btn btn-dark position-relative">
  Stock
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    4+
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT - Full Width utilizando container-fluid */}
        <main className="container-fluid p-4">
          
          {/* SECCIÓN DE OPERACIONES (Basado en tu captura) */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="bg-white p-4 rounded-3 shadow-sm d-flex align-items-center justify-content-between border-start border-success border-5">
                <div>
                  <h3 className="mb-1 fw-bold">Operaciones Rápidas</h3>
                  <p className="text-muted mb-0">Gestión de activos en tiempo real.</p>
                </div>
                <div className="d-flex gap-2">
                  <Link to="/nueva" className="btn btn-success btn-lg px-4 shadow">
                    Registrar Refacción
                  </Link>
                  <Link to="/inventario" className="btn btn-outline-dark btn-lg px-4">
                    Inventario de Refacciones
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* INDICADORES (KPIs) - Ocupan toda la fila horizontal */}
          {/* <div className="row g-3 mb-4 text-white text-center">
            <div className="col-md-3">
              <div className="p-4 rounded-3 shadow-sm bg-primary h-100">
                <small className="opacity-75 uppercase d-block mb-1">Total Refacciones</small>
                <h2 className="fw-bold mb-0">4,128</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 rounded-3 shadow-sm bg-warning text-dark h-100">
                <small className="opacity-75 uppercase d-block mb-1">Stock Crítico</small>
                <h2 className="fw-bold mb-0">23</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 rounded-3 shadow-sm bg-info h-100">
                <small className="opacity-75 uppercase d-block mb-1">Máquinas Activas</small>
                <h2 className="fw-bold mb-0">14</h2>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 rounded-3 shadow-sm bg-success h-100">
                <small className="opacity-75 uppercase d-block mb-1">Efectividad</small>
                <h2 className="fw-bold mb-0">98%</h2>
              </div>
            </div>
          </div> */}

          {/* REPORTE DE MANTENIMIENTO (Campos de tu dibujo en la libreta) */}
          {/* <div className="row mb-4">
            <div className="col-12">
              <div className="card border-0 shadow-sm rounded-3 overflow-hidden">
                <div className="card-header bg-white py-3">
                  <h5 className="mb-0 fw-bold text-secondary">Último Registro: Lemco Mantenimiento (ASB 8)</h5>
                </div>
                <div className="card-body">
                  <div className="row g-3">
                    <div className="col-md-3"><strong>Mecánico:</strong> Ricardo Pérez</div>
                    <div className="col-md-3"><strong>Supervisor:</strong> Juan Martínez</div>
                    <div className="col-md-3"><strong>Horas Máquina:</strong> 1,250 hrs</div>
                    <div className="col-md-3"><strong>Haccp:</strong> Cumple</div>
                  </div>
                  <hr />
                  <table className="table table-bordered mt-3 text-center align-middle">
                    <thead className="table-light text-uppercase small">
                      <tr>
                        <th>Acción / Nombre</th>
                        <th>Descripción</th>
                        <th>Foto Antes / Después</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cambio de Filtro</td>
                        <td>Se reemplaza filtro saturado por preventivo.</td>
                        <td>
                          <div className="d-flex gap-1 justify-content-center">
                            <div className="bg-light border" style={{width: '50px', height: '50px'}}></div>
                            <div className="bg-light border" style={{width: '50px', height: '50px'}}></div>
                          </div>
                        </td>
                        <td>✅ Listo</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div> */}

        </main>
      </div>

      {/* Estilos estándar de React (sin el atributo jsx) */}
      <style>
        {`
          .nav-link { transition: 0.2s; color: rgba(255,255,255,0.7); }
          .nav-link:hover { color: #fff; background: rgba(255,255,255,0.1); }
          .nav-link.active { background-color: #0dcaf0 !important; color: #000 !important; font-weight: bold; }
          .table-bordered th, .table-bordered td { border: 1px solid #dee2e6 !important; }
        `}
      </style>
    </div>
  );
}