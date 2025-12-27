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
export default function Dashboard() {
  return (
    <div className="app">

      {/* HEADER */}
      <header className="header">
        <div className="brand">IEMCO <span>v1.0</span></div>

        <input
          className="search"
          placeholder="Buscar refacción o escanear QR..."
        />

        <button className="stock">
          Stock <span>4</span>
        </button>
      </header>

      {/* MAIN */}
      <main className="main">
        <section className="card">
          <h2>Operaciones rápidas</h2>
          <p>Acceso inmediato a inventario</p>

          <div className="actions">
            <button className="primary">Registrar refacción</button>
            <button className="secondary">Inventario</button>
          </div>
        </section>
      </main>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .app {
          min-height: 100vh;
          background: #f3f4f6;
        }

        /* HEADER */
        .header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
          padding: 12px;
          background: white;
          border-bottom: 1px solid #ddd;
        }

        .brand {
          font-weight: 700;
          font-size: 1.4rem;
          color: #198754;
        }

        .brand span {
          font-size: 0.9rem;
          opacity: 0.7;
        }

        .search {
          padding: 14px;
          font-size: 1rem;
        }

        .stock {
          display: none;
          padding: 10px;
          font-size: 0.9rem;
        }

        /* MAIN */
        .main {
          padding: 16px;
        }

        .card {
          background: white;
          padding: 20px;
          border-radius: 12px;
          border-left: 6px solid #198754;
        }

        .card h2 {
          margin: 0;
          font-size: 1.3rem;
        }

        .card p {
          color: #6b7280;
          margin-bottom: 16px;
        }

        .actions {
          display: grid;
          gap: 12px;
        }

        .actions button {
          padding: 16px;
          font-size: 1.1rem;
          border-radius: 10px;
          border: none;
        }

        .primary {
          background: #198754;
          color: white;
        }

        .secondary {
          background: #e5e7eb;
        }

        /* DESKTOP */
        @media (min-width: 768px) {
          .header {
            grid-template-columns: auto 1fr auto;
            align-items: center;
          }

          .stock {
            display: inline-block;
          }

          .main {
            padding: 32px;
          }

          .actions {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}

