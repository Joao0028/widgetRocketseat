import { BrowserRouter, Route, Routes } from "react-router-dom";
import Avaliacao from "./Paginas/Avaliacao";
import Comentario from "./Paginas/Comentario";

function PaginaPrincipal() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Avaliacao />} />
          <Route path="/comentario" element={<Comentario />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default PaginaPrincipal;
