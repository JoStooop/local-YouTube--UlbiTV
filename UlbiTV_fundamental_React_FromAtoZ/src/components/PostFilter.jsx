import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = (props) => {
    const {filter, setFilter} = props

    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск...'/>
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}/>
        </div>
    );
};

export default PostFilter;
