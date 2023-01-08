import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UsuarioIndividual from './UsuarioIndividual';
function ListaUsuarios() {

    const [datasUsuarios, setdataUsuario] = useState([])

    useEffect(() => {
        axios.get('/api/archivo/obtenerarchivos').then(res => {
            console.log(res.data)
            setdataUsuario(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    //Mapear lista de usuarios en objeto usuario
    const listausuarios = datasUsuarios.map(usuario => {
        return (
            <div>
                <UsuarioIndividual usuario={usuario} />
            </div>
        )
    })
    return (
        <div>
            <h2>Lista de archivos registrados</h2>
            {listausuarios}
        </div>
    )
}

export default ListaUsuarios;