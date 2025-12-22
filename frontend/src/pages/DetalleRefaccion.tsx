import { useParams, useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import type { Refaccion } from "../types/Refaccion";
import { Link } from "react-router-dom";
import { useRef } from "react";

interface Props {
  refacciones: Refaccion[];
}

export default function DetalleRefaccion({ refacciones }: Props) {
  const { id } = useParams();
  const navigate = useNavigate();
  const qrRef = useRef<HTMLCanvasElement>(null);

  const ref = refacciones.find(r => r.id === id);

  if (!ref) {
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

 /* ===============================
     FUNCIONES QR (ref YA existe)
     =============================== */

  const descargarQR = () => {
    const canvas = qrRef.current;
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `QR-${ref.codigo || ref.id}.png`;
    link.click();
  };

  const imprimirQR = () => {
    const canvas = qrRef.current;
    if (!canvas) return;

    const url = canvas.toDataURL("image/png");
    const ventana = window.open("", "_blank");
    if (!ventana) return;

    ventana.document.write(`
      <html>
        <head>
          <title>Imprimir QR</title>
          <style>
            body {
              display:flex;
              justify-content:center;
              align-items:center;
              height:100vh;
              font-family: Arial;
            }
          </style>
        </head>
        <body>
          <div style="text-align:center">
            <h3>${ref.nombre}</h3>
            <img src="${url}" />
            <p>${ref.codigo || ""}</p>
          </div>
          <script>
            window.print();
            window.onafterprint = () => window.close();
          </script>
        </body>
      </html>
    `);
    ventana.document.close();
  };

  /* ===============================
     UI
     =============================== */


  return (
    <div className="d-flex vh-100 vw-100 overflow-hidden" style={{ backgroundColor: "#f0f2f5" }}>
            {/* 2. CONTENIDO PRINCIPAL - Se expande al 100% del resto de la pantalla */}
      <div className="flex-grow-1 d-flex flex-column overflow-auto">
        {/* TOPBAR FLUIDA */}
        <header className="navbar navbar-expand bg-white border-bottom px-4 py-3 sticky-top shadow-sm w-100">
          <div className="container-fluid px-0">
        
          <span className="fs-4 fw-bold text-success">IEMCO <small className="fs-6 text-success-50">v1.0</small></span>
      <h1 className="text-white-50">ddsoiuytrtyuiuytrertyui</h1>
            <h5 className="mb-0 fw-bold">{ref.nombre}</h5>
            <div className="ms-auto d-flex align-items-center gap-3">
              <input type="search" className="form-control" placeholder="Buscar..." style={{ width: '250px' }} />
              <Link to="/" className="btn btn-success position-relative">
                    Inicio
                  </Link>
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

      {/* <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>{ref.nombre}</h3>
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/inventario")}
        >
          Volver
        </button>
      </div> */}
      {/* MAIN CONTENT - Full Width utilizando container-fluid */}
        <main className="container-fluid p-4">

      
        <div className="card-body">

          {/* HEADER */}
          <div className="row mb-4">
            <div className="col-md-8">
              <p><b>ID:</b> {ref.id}</p>
              <p><b>Código / Serie:</b> {ref.codigo}</p>
              <p><b>Categoría:</b> {ref.categoria}</p>
              <p>
                <b>Estado:</b>{" "}
                <span className="badge bg-info text-dark">
                  {ref.estado}
                </span>
              </p>
            </div>

            <div className="col-md-4 text-center">
              <QRCodeCanvas
            value={ref.id}
            size={150}
            ref={qrRef}
          />

          <p className="mt-2 text-muted">QR del producto</p>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <button
              className="btn btn-outline-primary"
              onClick={descargarQR}
            >
              Descargar QR
            </button>

            <button
              className="btn btn-outline-secondary"
              onClick={imprimirQR}
            >
              Imprimir QR
            </button>
              <div className="small text-muted mt-1">QR del producto</div>
            </div>
          </div>

          <hr />

          {/* INFO */}
          <div className="row g-3">
            <div className="col-md-4">
              <b>Cantidad</b>
              <div>{ref.cantidad}</div>
            </div>

            <div className="col-md-4">
              <b>Ubicación</b>
              <div>{ref.ubicacion}</div>
            </div>

            <div className="col-md-4">
              <b>Proveedor</b>
              <div>{ref.proveedor || "N/A"}</div>
            </div>

            <div className="col-md-6">
              <b>Máquinas compatibles</b>
              <div>{ref.maquinas || "N/A"}</div>
            </div>

            <div className="col-md-6">
              <b>Medidas</b>
              <div>{ref.medidas || "N/A"}</div>
            </div>
          </div>

          <hr />

          {/* DESCRIPCIÓN */}
          <b>Descripción</b>
          <p className="text-muted">
            {ref.descripcion || "Sin descripción"}
          </p>

          <hr />

          {/* HISTORIAL */}
          <b>Historial</b>
          <p className="text-muted">
            {ref.historial || "Sin historial"}
          </p>

          {/* IMÁGENES */}
          {(ref.imagen1 || ref.imagen2) && (
            <>
              <hr />
              <b>Imágenes</b>

              <div className="row mt-2">
                {ref.imagen1 && (
                  <div className="col-md-6">
                    <img
                      src={ref.imagen1}
                      className="img-fluid rounded"
                    />
                  </div>
                )}
                {ref.imagen2 && (
                  <div className="col-md-6">
                    <img
                      src={ref.imagen2}
                      className="img-fluid rounded"
                    />
                  </div>
                )}
              </div>
            </>
          )}

          <hr />

          {/* BOTÓN EDITAR */}
          <div className="text-end">
            <button
              className="btn btn-primary"
              onClick={() =>
                navigate(`/inventario/editar/${ref.id}`)
              }
            >
              Editar refacción
            </button>
          </div>

        </div>
      </div>
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
