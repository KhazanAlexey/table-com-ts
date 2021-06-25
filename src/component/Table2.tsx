import React from 'react';
import {DataItemType} from '../App';
import "../App.css";


type propsType = {
    columns: Array<any>
    records: Array<DataItemType>
    sortConfig: any
    requestSort: (arg: string) => void
}


export const Table: React.FC<propsType> = ({
                                               columns,
                                               records,
                                               sortConfig,
                                               requestSort

                                           }) => {


    const getClassNamesFor = (name: string) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? sortConfig.direction : undefined;
    };


    if (!records) return <p>No DATA</p>
    return <>
        <table>
            <thead>
            <tr>
                {columns.map((colu,i) =>
                    <th key={i} className={getClassNamesFor(colu.accessor)} onClick={() => {
                        requestSort(colu.accessor)
                    }}

                    >{colu.Header}</th>)}
            </tr>
            </thead>
            <tbody>

            {records.map((user: any, index) => {
                    return (
                        <tr key={index}>
                            {columns.map((el,index) => {

                                return (
                                    <td key={index}>
                                        {user[el.accessor] === 0 ? '0' : user[el.accessor]}
                                    </td>
                                )
                            })}
                        </tr>
                    )

                }
            )
            }

            </tbody>
        </table>
    </>
}

