import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table'

function ListaArchivos() {

    const [datasUsuarios, setdataUsuario] = useState([])
    const [valuesTabla, setValuesTabla] = useState([])
    const [columTabla, setcolumTabla] = useState([])

    useEffect(() => {
        axios.get('/api/archivo/obtenerarchivos').then(res => {
            setdataUsuario(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    if (datasUsuarios === null) {
        return <div>
            Cargando...
        </div>
    }
    const columns = []
    function mostrarTabla(name) {
        console.log(name)
        axios.get('/api/archivo/obtenerarchivo', { params: { name: name } }).then(res => {
            setValuesTabla(res.data)
            for (const obj of res.data) {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        columns.push({
                            Header: key,
                            accessor: key
                        })
                    }
                }
                break;
            }
            setcolumTabla(columns)
            // columns = []
        }).catch(err => {
            console.log(err);
        })
    }

    function Table({ columns, data }) {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({
            columns,
            data,
        })
        return (
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-xl-3">
                    <h3>Archivos registrados</h3>
                    <div className="row">
                        <div className="col-xl-10">
                            <div className="list-group" id="list-tab" role="tablist">
                                {datasUsuarios.map((item, index) => (
                                    <a className="list-group-item list-group-item-action" id="list-profile" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home" key={index} onClick={() => mostrarTabla(item)}>
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9">
                    <div>
                        <Table columns={columTabla} data={valuesTabla}></Table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ListaArchivos;