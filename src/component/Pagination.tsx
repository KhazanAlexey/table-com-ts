import React, {useEffect, useState} from 'react';
import {DataItemType} from '../App';
import "../App.css";
import s from './Paginator.module.css'

type propsType = {
    records: Array<DataItemType>
    pageSize: number
    setPagRec: (r: Array<DataItemType>) => void
}


export const Pagination: React.FC<propsType> = ({
                                                    records,
                                                    pageSize,
                                                    setPagRec
                                                    // paginator
                                                }) => {
    const [currentPage, setcurrentPage] = useState<number>(1)
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(records.length / pageSize); i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        setPagRec(records.slice(0, pageSize))
    }, [records])
    useEffect(() => {
        const indexOfLastRec = currentPage * pageSize;
        const indexOfFirstRec = indexOfLastRec - pageSize;
        const pagRecords = records.slice(indexOfFirstRec, indexOfLastRec);
        setPagRec(pagRecords)
    }, [currentPage])

    const handleClick = (e: any) => {
        setcurrentPage(e.currentTarget.value)

    }

    function goToNextPage() {

        setcurrentPage((page: number) => {
            if (page >= pageNumbers.length) {

                return pageNumbers.length
            } else {
                return page + 1
            }
        });
    }

    function goToPreviousPage() {
        setcurrentPage((page: number) => {
            if (page <= 1) {
                return 1
            } else {
                return page - 1
            }
        });

    }


    return <>

        <ul id="page-numbers">
            <li onClick={goToPreviousPage}>back</li>
            {pageNumbers.map(number => {
                return (
                    <li
                        className={currentPage === number ? s.selectedPage : s.pageNumber}
                        key={number}
                        value={number}
                        onClick={handleClick}
                    >
                        {number}
                    </li>
                );
            })}
            <li onClick={goToNextPage}>next</li>
        </ul>


    </>
}

