import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import PageNotFound from './pages/pageNotFound';
import Cadastro from './pages/cadastro';
import Usuario from './pages/usuario';
import SolicitarAgSaude from './pages/solicitarAgSaude';
import SolicitarAgEndemias from './pages/solicitarAgEndemias';
import SolicitarConsultas from './pages/solicitarConsultas';
import SolicitarExames from './pages/solicitarExames';
import SolicitarMedicamentos from './pages/solicitarMedicamentos';
import MelhorEmCasa from './pages/melhorEmCasa';
import Ouvidoria from './pages/ouvidoria';
import SolicitarTransporte from './pages/solicitarTransporte';
import Layout from './layout/Layout';
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/usuario" element={<Layout><Usuario /></Layout>} />
          <Route path="/solicitar-agente-saude" element={<Layout><SolicitarAgSaude /></Layout>} />
          <Route path="/solicitar-agente-endemias" element={<Layout><SolicitarAgEndemias /></Layout>} />
          <Route path="/solicitar-consultas" element={<Layout><SolicitarConsultas /></Layout>} />
          <Route path="/solicitar-exames" element={<Layout><SolicitarExames /></Layout>} />
          <Route path="/solicitar-medicamentos" element={<Layout><SolicitarMedicamentos /></Layout>} />
          <Route path="/solicitar-transporte" element={<Layout><SolicitarTransporte /></Layout>} />
          <Route path="/solicitar-melhor-em-casa" element={<Layout><MelhorEmCasa /></Layout>} />
          <Route path="/ouvidoria" element={<Layout><Ouvidoria /></Layout>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
