import {
  Container,
  Typography,
  Card,
  CardContent,
  TextField,
  Button,
  Stack
} from "@mui/material";
import type { Refaccion } from "../types/Refaccion";

interface Props {
  refacciones: Refaccion[];
  setRefacciones: React.Dispatch<React.SetStateAction<Refaccion[]>>;
}

export default function EditarInventario({
  refacciones,
  setRefacciones
}: Props) {

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
    <Container>
      <Typography variant="h5" mt={4}>
        Actualizar Inventario
      </Typography>

      {refacciones.length === 0 && (
        <Typography mt={2}>No hay refacciones para editar</Typography>
      )}

      {refacciones.map(ref => (
        <Card key={ref.id} sx={{ mt: 2 }}>
          <CardContent>
            <Stack spacing={2}>
              <TextField
                label="Nombre"
                value={ref.nombre}
                onChange={e =>
                  handleChange(ref.id, "nombre", e.target.value)
                }
              />

              <TextField
                label="Ubicación"
                value={ref.ubicacion}
                onChange={e =>
                  handleChange(ref.id, "ubicacion", e.target.value)
                }
              />

              <TextField
                label="Cantidad"
                type="number"
                value={ref.cantidad}
                onChange={e =>
                  handleChange(ref.id, "cantidad", Number(e.target.value))
                }
              />

              <Button variant="contained" color="success">
                Guardar cambios
              </Button>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
