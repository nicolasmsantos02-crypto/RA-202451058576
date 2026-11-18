import { BrowserRouter, Routes, Route } from "react-router-dom";

import SobreNos from "./Sobre-nos";
import Cadastro from "./Cadastro";
import Contato from "./Contato";
import Historia from "./Historia";
import TiposDeCerveja from "./Tipos-de-Cerveja";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/tipos-de-cerveja" element={<TiposDeCerveja />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

