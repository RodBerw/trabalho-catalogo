import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Planos from "./pages/planos";
import Sobre from "./pages/sobre";
import Detalhes from "./pages/detalhes";
import Cadastro from "./pages/cadastro";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="planos" element={<Planos />} />
      <Route path="sobre/:name" element={<Sobre />} />
      <Route path="detalhes/:filme" element={<Detalhes />} />
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="*" element={<h1>Página Não Encontrada!</h1>} />
    </Routes>
  );
}
