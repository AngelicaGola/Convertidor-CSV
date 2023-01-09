import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AgregarArchivo.css';

function AgregarArchivo() {

    //Hooks
    const [csvString, setCsvString] = useState('');
    const [csvFilename, setCsvFilename] = useState('');

    //para volver al index
    const navegar = useNavigate()

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

        axios.post('/api/archivo/agregararchivo', data)

            .then(response => {
                console.log(response.data);
                alert('El archivo se guardo correctamente')
                navegar('/')
            })
            .catch(error => {
                console.log(error);
            });
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6 contenido">
                    <div className="mb-4">
                        <label for="formFile" className="form-label">Suba el archio Csv</label>
                        <input class="form-control" type="file" id="csv-file" accept=".csv" onChange={handleFileChange} />
                    </div>
                    <button onClick={subirArchivo} className="btn btn-success mb-4">Subir Archivo</button>
                </div>
            </div>
        </div>
    )
}

export default AgregarArchivo;