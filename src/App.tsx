import React from 'react';
import './App.css';
import {TableWithFilter} from "./component/TableWithFilter";

export type DataItemType = {
    "id": number
    "name": string
    "age": number
}
export type ColumnObjType = {
    "Header": string
    "accessor":string
    "type": string
}


function App() {
    const data: Array<DataItemType> = [
        {
        "id": 0,
        "name": "dima",
        "age": 12,
    }, {
        "id": 2,
        "name": "antonio",
        "age": 13,
    }, {
        "id": 3,
        "name": "alex",
        "age": 14},
        {
            "id": 4,
            "name": "dima",
            "age": 12,
        }, {
            "id": 5,
            "name": "antonio",
            "age": 13,
        },
        {
            "id": 6,
            "name": "dima",
            "age": 12,
        }, {
            "id": 7,
            "name": "antonio",
            "age": 13,
        },
        {
            "id": 8,
            "name": "dima",
            "age": 12,
        }, {
            "id": 9,
            "name": "antonio",
            "age": 13,
        },
        {
            "id": 10,
            "name": "dima",
            "age": 12,
        }, {
            "id": 12,
            "name": "antonio",
            "age": 13,
        },
        {
            "id": 13,
            "name": "dima",
            "age": 12,
        }, {
            "id": 14,
            "name": "antonio",
            "age": 13,
        },
        {
            "id": 15,
            "name": "dima",
            "age": 16,
        }, {
            "id": 17,
            "name": "antonio",
            "age": 13,
        },{
            "id": 0,
            "name": "dima",
            "age": 12,
        }, {
            "id": 18,
            "name": "antonio",
            "age": 13,
        },{
            "id": 19,
            "name": "dima",
            "age": 12,
        }, {
            "id": 20,
            "name": "antonio",
            "age": 13,
        },{
            "id": 21,
            "name": "dima",
            "age": 12,
        }, {
            "id": 22,
            "name": "sergei",
            "age": 13,
        },{
            "id": 23,
            "name": "dima",
            "age": 15,
        }, {
            "id": 2,
            "name": "antonio",
            "age": 13,
        },{
            "id": 24,
            "name": "dima",
            "age": 12,
        }, {
            "id": 25,
            "name": "dmitriy",
            "age": 33,
        },{
            "id": 26,
            "name": "dima",
            "age": 12,
        }, {
            "id": 27,
            "name": "damir",
            "age": 13


    }]
    const columns:Array<ColumnObjType> = [

        {
            Header: 'First Name',
            accessor: 'name',
            type: "string"
        },

        {
            Header: 'ID',
            accessor: 'id',
            type: "number"
        },
        {
            Header: 'Age',
            accessor: 'age',
            type: "string"
        },
        {
            Header: 'Street',
            accessor: 'street',
            type: "string"
        },



    ]



    const filterFields: Array<string> = ["id", "name", "age"]


    return (
        <div className="App">
            <TableWithFilter
                filterFields={filterFields}
                columns={columns}
                records={data}
                pageSize={3}
            />
        </div>
    )
        ;
}

export default App;
