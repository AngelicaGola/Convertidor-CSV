import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
function AgregarUsuario() {

    //Hooks
    const [csvString, setCsvString] = useState('');
    const [csvFilename, setCsvFilename] = useState('');

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        const leer = new FileReader();

        leer.onload = () => {
            setCsvString(leer.result);
            setCsvFilename(event.target.files[0].name)
            console.log(csvString);
        };
        leer.readAsText(file);
    }

    function subirArchivo() {
        const data = { csvString, csvFilename }
        console.log(data);

        axios.post('/api/usuario/agregarusuario', data)

            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <div className="mb-4">
                        <label for="formFile" class="form-label">Suba el archio Csv que quiere visualizar</label>
                        <input class="form-control" type="file" id="csv-file" accept=".csv" onChange={handleFileChange} />
                        {csvString && <p>{csvString}</p>}


                        <label className="mensaje" for="mensaje">Mensaje</label>
                        <textarea name="" id="mensaje" cols="65" rows="10"></textarea>
                    </div>

                    <button onClick={subirArchivo} className='btn btn-success mb-4'>Subir Archivo</button>

                </div>
            </div>

        </div>


    )
}

export default AgregarUsuario;