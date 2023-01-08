import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TablaArchivo from './TablaArchivo';
function ListaArchivos() {

    const [datasUsuarios, setdataUsuario] = useState([])


    const [valuesTabla, setValuesTabla] = useState([])



    useEffect(() => {
        axios.get('/api/archivo/obtenerarchivos').then(res => {
            setdataUsuario(res.data)


            // console.log(datasUsuarios)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    // //Mapear lista de usuarios en objeto usuario
    // const listausuarios = datasUsuarios.map(usuario => {
    //     return (
    //         <div>
    //             <UsuarioIndividual usuario={usuario} />
    //         </div>
    //     )
    // })
    if (datasUsuarios === null) {
        return <div>
            Cargando...
        </div>
    }





    function mostrarTabla(name) {
        console.log(name)
        axios.get('/api/archivo/obtenerarchivo', { params: { name: name } }).then(res => {
            // console.log(res);
            setValuesTabla(res.data)

        }).catch(err => {
            console.log(err);
        })
    }

    let keys = []
    try {
        keys = valuesTabla.map(item => Object.keys(item))
        // console.log(keys)
    }
    catch (err) {
        console.log(err);
    }


    let values = [];
    try {
        values = valuesTabla.map(item => Object.values(item))
        console.log(values)
    }
    catch (err) {
        console.log(err);
    }


    if (keys === []) {
        return <div>
            Cargando...
        </div>
    }
    if (values === []) {
        return <div>
            Cargando...
        </div>
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3">
                    <h2>Archivos</h2>
                    <div class="row">
                        <div class="col-xl-10">
                            <div class="list-group" id="list-tab" role="tablist">
                                {datasUsuarios.map((item, index) => (
                                    <a class="list-group-item list-group-item-action" id="list-profile" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home" key={index} onClick={() => mostrarTabla(item)}>
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-xl-9">
                    <h2>Nombre del archivo</h2>

                    <div>
                        {/* {keys.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))} */}
                        {keys.map(innerArray => {
                            return innerArray.map(element => {
                                return <div>{element}</div>;
                            });
                        })}




                    </div>
                    <div>
                        {values.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </div>

                </div>

            </div>

            {/* {listausuarios} */}
        </div>
    )
}

export default ListaArchivos;