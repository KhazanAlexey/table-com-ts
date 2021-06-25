import React, {useState} from 'react';
import {ColumnObjType, DataItemType} from '../App';
import {useSortableData} from '../hook/sorthook';
import {Filter} from './Filter';
import {Table} from './Table2';
import {useSearch} from "../hook/searchook";
import {Pagination} from "./Pagination";

type propsType = {
    filterFields: Array<string>
    columns: Array<ColumnObjType>
    records: Array<DataItemType>
    pageSize: number
}


export const TableWithFilter: React.FC<propsType> = ({
                                                         filterFields,
                                                         columns,
                                                         records,
                                                         pageSize
                                                     }) => {

    const [pagRec, setPagRec] = useState<Array<DataItemType>>([])  //paginatoin
    const {sortedItems, setSelect, setSearch} = useSearch(records)  ///search hook
    const {items, requestSort, sortConfig} = useSortableData(sortedItems); ///sort hook
    return <>
        <Filter setSelect={setSelect} setSearch={setSearch} filterFields={filterFields}/>
        <Table requestSort={requestSort} sortConfig={sortConfig} columns={columns} records={pagRec}/>
        <Pagination records={items} pageSize={pageSize} setPagRec={setPagRec}/>


    </>

}

