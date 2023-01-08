import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
function TablaArchivo({ usuario }) {
    // Funcion para borrar usuario
    function borrarusuario(idusuario) {

        axios.post('/api/usuario/borrarusuario', { idusuario: idusuario }).then(res => {
            console.log(res.data[0])
            alert(res.data)
        }).catch(err => {
            console.log(err)
        })

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <ul className="list-group">
                        <li className="list-group-item">{usuario.idusuario}</li>
                        <li className="list-group-item">{usuario.nombre}</li>
                        <li className="list-group-item">{usuario.email}</li>
                        <li className="list-group-item">{usuario.telefono}</li>
                    </ul>
                    {/* <button className="btn btn-success">Editar</button> */}
                    <Link to={`/editarusuario/${usuario.idusuario}`}> <li className="btn btn-success">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={() => { borrarusuario(usuario.idusuario) }}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>

            </div>


        </div>
    )
}

export default TablaArchivo;