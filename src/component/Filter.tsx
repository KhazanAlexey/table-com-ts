import React from 'react';
import "../App.css";

type propsType = {
    filterFields: Array<string>
    setSelect: (sel: string) => void
    setSearch: (ser: string) => void
}


export const Filter: React.FC<propsType> = ({
                                                filterFields,
                                                setSearch,
                                                setSelect

                                            }) => {





    return <>
        <h2>Select field and start to search</h2>
        <div>Select
            <select defaultValue={''} className="form-control" id="searchType" onChange={(e) => {
                setSelect(e.currentTarget.value)
            }}>
                {filterFields.map((f,index) => <option key={index} value={f}>{f}</option>)}
                <option value={''}></option>
            </select>
            Search
            <input type='text' onChange={(e) => {
                setSearch(e.currentTarget.value)
            }}/>

        </div>
        <h2>Press on th to sort</h2>
    </>
}

