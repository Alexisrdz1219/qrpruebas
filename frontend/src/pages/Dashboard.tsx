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
// import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// export default function DashboardLemcoFull() {
//   return (
//     // 'vw-100' asegura que el contenedor principal ocupe todo el ancho de la ventana
//     <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
      
     

//       {/* 2. CONTENIDO PRINCIPAL - Se expande al 100% del resto de la pantalla */}
//       <div className="flex-grow-1 d-flex flex-column overflow-auto">
        
//         {/* TOPBAR FLUIDA */}
//         <header className="navbar navbar-expand bg-white border-bottom px-4 py-3 sticky-top shadow-sm w-100">
//           <div className="container-fluid px-0">
        
//           <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50">v1.0</small></span>
//       <h1 className="text-white-50">ddsoiuytrtyuiuytrertyui</h1>
//             <h5 className="mb-0 fw-bold">Panel de Control</h5>
//             <div className="ms-auto d-flex align-items-center gap-3">
//               <input type="search" className="form-control" placeholder="Buscar..." style={{ width: '250px' }} />
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

//         {/* MAIN CONTENT - Full Width utilizando container-fluid */}
//         <main className="container-fluid p-4">
          
//           {/* SECCIÓN DE OPERACIONES (Basado en tu captura) */}
//           <div className="row mb-4">
//             <div className="col-12">
//               <div className="bg-white p-4 rounded-3 shadow-sm d-flex align-items-center justify-content-between border-start border-success border-5">
//                 <div>
//                   <h3 className="mb-1 fw-bold">Operaciones Rápidas</h3>
//                   <p className="text-muted mb-0">Gestión de activos en tiempo real.</p>
//                 </div>
//                 <div className="d-flex gap-2">
//                   <Link to="/nueva" className="btn btn-success btn-lg px-4 shadow">
//                     Registrar Refacción
//                   </Link>
//                   <Link to="/inventario" className="btn btn-outline-dark btn-lg px-4">
//                     Inventario de Refacciones
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

          

//         </main>
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

export default function DashboardLemcoFull() {
  return (
    <div className="d-flex min-vh-100 w-100" style={{ backgroundColor: "#f8f9fa" }}>
      
      {/* 1. SIDEBAR - Solo visible en Escritorio (lg) */}
      {/* <nav className="d-none d-lg-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 opacity-50">v1.0</small></span>
        </a>
        <hr />
        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active">Panel Principal</Link>
          </li>
          <li><Link to="/inventario" className="nav-link text-white">Inventario</Link></li>
          <li><Link to="/reportes" className="nav-link text-white">Reportes</Link></li>
        </ul>
      </nav> */}

      {/* 2. CONTENIDO PRINCIPAL */}
      <div className="fd-flex vh-100 vw-100 overflow-hidden">
        
        {/* TOPBAR - Adaptable */}
        <header className="navbar bg-white border-bottom px-3 py-3 sticky-top shadow-sm">
          <div className="container-fluid">
            {/* Título adaptable */}
            <div className="d-flex align-items-center">
              <span className="d-lg-none fs-5 fw-bold text-success me-2">IEMCO</span>
              <h5 className="mb-0 fw-bold d-none d-sm-block text-secondary">Panel de Control</h5>
            </div>

            {/* Buscador y Botón */}
            <div className="d-flex align-items-center gap-2 gap-md-3">
              <input 
                type="search" 
                className="form-control form-control-sm d-none d-md-block" 
                placeholder="Buscar refacción..." 
                style={{ width: '200px' }} 
              />
              <button className="btn btn-sm btn-dark position-relative px-3">
                Stock <span className="badge bg-danger ms-1">4</span>
              </button>
            </div>
          </div>
        </header>

        {/* CONTENIDO DEL DASHBOARD */}
        <main className="p-3 p-md-4 p-lg-5">
          
          {/* CARD DE BIENVENIDA / OPERACIONES */}
          <div className="card border-0 shadow-sm rounded-4 overflow-hidden mb-4">
            <div className="row g-0">
              <div className="col-md-8 p-4">
                <h2 className="fw-bold mb-1">¡Bienvenido de nuevo!</h2>
                <p className="text-muted mb-4">Gestiona el inventario y las refacciones de IEMCO de forma eficiente.</p>
                
                {/* Botones: Se apilan en móvil, se alinean en Web */}
                <div className="d-grid d-sm-flex gap-3">
                  <Link to="/nueva" className="btn btn-success btn-lg px-4 fw-bold shadow-sm">
                    + Registrar Refacción
                  </Link>
                  <Link to="/inventario" className="btn btn-outline-dark btn-lg px-4">
                    Ver Inventario
                  </Link>
                </div>
              </div>
              {/* Imagen decorativa solo visible en pantallas grandes */}
              <div className="col-md-4 d-none d-md-flex align-items-center justify-content-center bg-light">
                <div className="text-success opacity-25">
                  <i className="bi bi-tools" style={{ fontSize: "5rem" }}></i>
                </div>
              </div>
            </div>
          </div>

          {/* GRID DE ESTADÍSTICAS (4 columnas en Web, 2 en Tablet, 1 en Móvil) */}
          <div className="row g-3">
            {[
              { label: "Total Refacciones", value: "1,240", color: "primary" },
              { label: "Bajo Stock", value: "8", color: "danger" },
              { label: "Entradas hoy", value: "15", color: "success" },
              { label: "Salidas hoy", value: "3", color: "info" }
            ].map((item, index) => (
              <div key={index} className="col-6 col-md-4 col-lg-3">
                <div className="card border-0 shadow-sm p-3 h-100 border-bottom border-4" style={{ borderColor: `var(--bs-${item.color})` }}>
                  <small className="text-muted text-uppercase fw-bold" style={{ fontSize: '0.7rem' }}>{item.label}</small>
                  <div className="fs-3 fw-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      <style>
        {`
          /* Transiciones suaves */
          .nav-link { transition: all 0.3s; border-radius: 8px; margin-bottom: 5px; }
          .nav-link:hover { background: rgba(255,255,255,0.1); }
          .card { transition: transform 0.2s; }
          .card:hover { transform: translateY(-3px); }
          
          /* Ajuste para que los botones en móvil sean fáciles de tocar */
          @media (max-width: 576px) {
            .btn-lg {
              padding: 12px;
              font-size: 1rem;
            }
          }
        `}
      </style>
    </div>
  );
}
