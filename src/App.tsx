import "./App.css";
import ListarCargos from "./components/cargos/listacargos/ListarCargos";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/NavBar";
import FuncionarioPage from "./pages/funcionario/funcionarioPage";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funcionarios" element={<FuncionarioPage />} />
        <Route path="/cargos" element={<ListarCargos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
