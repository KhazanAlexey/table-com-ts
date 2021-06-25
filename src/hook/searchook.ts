import {useMemo, useState} from "react";
import {DataItemType} from "../App";

export const useSearch = (data:Array<DataItemType>) => {
    const [select,setSelect]=useState<string>('')
    const [search,setSearch]=useState<string>('')

    const sortedItems = useMemo(() => {

        let lowsearch = search.toString().toLowerCase();
       const searchedItems = data.filter((d: any) => {
            if (search && select) {
                return d[select].toString().toLowerCase().includes(lowsearch)
            } else {
                return d
            }
        })
        return searchedItems
    }, [select, search, data]);


    return {sortedItems,setSelect,setSearch };
};