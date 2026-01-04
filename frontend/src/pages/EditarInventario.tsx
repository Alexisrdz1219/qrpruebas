// import {
//   Container,
//   Typography,
//   Card,
//   CardContent,
//   TextField,
//   Button,
//   Stack
// } from "@mui/material";
// import type { Refaccion } from "../types/Refaccion";

// interface Props {
//   refacciones: Refaccion[];
//   setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
// }

// export default function EditarInventario({
//   refacciones,
//   setRefacciones
// }: Props) {

//   const handleChange = (
//     id: string,
//     campo: keyof Refaccion,
//     valor: string | number
//   ) => {
//     setRefacciones(prev =>
//       prev.map(ref =>
//         ref.id === id ? { ...ref, [campo]: valor } : ref
//       )
//     );
//   };

//   return (
//     <Container>
//       <Typography variant="h5" mt={4}>
//         Actualizar Inventario
//       </Typography>

//       {refacciones.length === 0 && (
//         <Typography mt={2}>No hay refacciones para editar</Typography>
//       )}

//       {refacciones.map(ref => (
//         <Card key={ref.id} sx={{ mt: 2 }}>
//           <CardContent>
//             <Stack spacing={2}>
//               <TextField
//                 label="Nombre"
//                 value={ref.nombre}
//                 onChange={e =>
//                   handleChange(ref.id, "nombre", e.target.value)
//                 }
//               />

//               <TextField
//                 label="Ubicación"
//                 value={ref.ubicacion}
//                 onChange={e =>
//                   handleChange(ref.id, "ubicacion", e.target.value)
//                 }
//               />

//               <TextField
//                 label="Cantidad"
//                 type="number"
//                 value={ref.cantidad}
//                 onChange={e =>
//                   handleChange(ref.id, "cantidad", Number(e.target.value))
//                 }
//               />

//               <Button variant="contained" color="success">
//                 Guardar cambios
//               </Button>
//             </Stack>
//           </CardContent>
//         </Card>
//       ))}
//     </Container>
//   );
// }
import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Box,
  IconButton
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material"; // Asegúrate de tener @mui/icons-material instalado
import { useNavigate } from "react-router-dom";
import type { Refaccion } from "../types/Refaccion";

interface Props {
  refacciones: Refaccion[];
  setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
}

export default function EditarInventario({
  refacciones,
  setRefacciones
}: Props) {
  const navigate = useNavigate();

  const handleChange = (
    id: string,
    campo: keyof Refaccion,
    valor: string | number
  ) => {
    setRefacciones(prev =>
      prev.map(ref =>
        ref.id === id ? { ...ref, [campo]: valor } : ref
      )
    );
  };

  return (
    // Contenedor principal con scroll independiente y fondo gris
    <Box 
      className="vh-100 vw-100 overflow-auto" 
      sx={{ backgroundColor: "#f0f2f5", pb: 4 }}
    >
      {/* HEADER TIPO DASHBOARD */}
      <Box 
        className="bg-white border-bottom shadow-sm" 
        sx={{ p: { xs: 2, md: 3 }, mb: 3, position: 'sticky', top: 0, zIndex: 10 }}
      >
        <Container maxWidth="lg">
          <Stack direction="row" alignItems="center" spacing={2}>
            <IconButton onClick={() => navigate(-1)} color="primary">
              <ArrowBack />
            </IconButton>
            <Box>
              <Typography variant="h5" fontWeight="bold" color="success.main">
                IEMCO <small style={{ fontSize: '0.6em', opacity: 0.6 }}>v1.0</small>
              </Typography>
              <Typography variant="subtitle2" color="text.secondary">
                Actualizar Inventario
              </Typography>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxWidth="md">
        {refacciones.length === 0 ? (
          <Card sx={{ p: 4, textAlign: 'center', borderRadius: 3 }}>
            <Typography color="text.secondary">No hay refacciones para editar</Typography>
            <Button 
              variant="outlined" 
              sx={{ mt: 2 }} 
              onClick={() => navigate("/")}
            >
              Volver al inicio
            </Button>
          </Card>
        ) : (
          <Stack spacing={3}>
            {refacciones.map(ref => (
              <Card 
                key={ref.id} 
                sx={{ 
                  borderRadius: 3, 
                  boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                  borderLeft: '6px solid',
                  borderLeftColor: 'success.main'
                }}
              >
                <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                  <Typography variant="overline" color="text.secondary" gutterBottom>
                    ID Producto: {ref.id}
                  </Typography>
                  
                  {/* Grid responsivo de campos */}
                  <Stack spacing={3} mt={1}>
                    <TextField
                      fullWidth
                      label="Nombre de la Refacción"
                      variant="outlined"
                      value={ref.nombre}
                      onChange={e =>
                        handleChange(ref.id, "nombre", e.target.value)
                      }
                    />

                    <Box sx={{ 
                      display: 'grid', 
                      gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
                      gap: 2 
                    }}>
                      <TextField
                        label="Ubicación"
                        variant="outlined"
                        value={ref.ubicacion}
                        onChange={e =>
                          handleChange(ref.id, "ubicacion", e.target.value)
                        }
                      />

                      <TextField
                        label="Cantidad en Stock"
                        type="number"
                        variant="outlined"
                        value={ref.cantidad}
                        onChange={e =>
                          handleChange(ref.id, "cantidad", Number(e.target.value))
                        }
                      />
                    </Box>

                    <Button 
                      variant="contained" 
                      color="success" 
                      size="large"
                      fullWidth
                      sx={{ py: 1.5, fontWeight: 'bold' }}
                      onClick={() => alert('Cambios guardados localmente')}
                    >
                      Guardar cambios
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Container>
    </Box>
  );
}
