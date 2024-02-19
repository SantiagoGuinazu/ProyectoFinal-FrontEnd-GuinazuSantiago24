import { Button } from "@mui/material"
import { useAuthStore } from "../hooks/useAuthStore"

export const InicioPage = () => {
  
  const {startLogout} = useAuthStore();

  const onHandleLogout = () => startLogout();
  
  return (
    <div>
      <h1>Pagina de inicio</h1>

      <Button
      variant="contained"
      onClick={onHandleLogout}
      >Cerrar Sesion</Button>
    </div>
  )
}
