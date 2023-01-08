import React, { useState } from 'react';
import uniqid from 'uniqid';
import axios from 'axios';
function AgregarArchivo() {

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

        axios.post('/api/archivo/agregararchivo', data)

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
                    </div>


                    <button onClick={subirArchivo} className="btn btn-success mb-4">Subir Archivo</button>

                </div>
            </div>

            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colspan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>


    )
}

export default AgregarArchivo;