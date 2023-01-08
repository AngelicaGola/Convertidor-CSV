import logo from './logo.svg';
import './App.css';
import ListaUsuarios from './ListaUsuarios';
import AgregarArchivo from './AgregarArchivo';
import EditarUsuario from './EditarUsuario';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Prueba de ingreso</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link" aria-current="page" href="/">Ver registros</a>
              <a className="nav-link" href="agregararchivo">Agregar archivo </a>
            </div>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ListaUsuarios />}></Route>
          <Route path='/agregararchivo' element={<AgregarArchivo />}></Route>
          <Route path='/editarusuario/:idusuario' element={<EditarUsuario />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
