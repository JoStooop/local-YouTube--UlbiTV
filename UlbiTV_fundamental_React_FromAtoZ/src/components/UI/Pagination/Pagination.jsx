import React from 'react';
import {getPagesArray} from "../../../utils/pages";

const Pagination = (props) => {
    const {totalPages, page, changePage} = props
    let pagesArray = getPagesArray(totalPages)


    return (
        <div className='page__wrap'>
            {pagesArray.map(item =>
                    <span
                        className={page === item ? 'page page__current' : 'page'}
                        key={item}
                        onClick={() => changePage(item)}>
            {item}
          </span>
            )}
        </div>
    );
};

export default Pagination;
