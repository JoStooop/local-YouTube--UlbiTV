import React from 'react';
import {optionsValue} from "../../../consts/consts";

const MySelect = (props) => {
    const {onChange, value} = props
    const {defaultValue, options} = optionsValue

    return (
        <select
            value={value}
            onChange={event => onChange(event.target.value)}>
            <option disabled value=''>{defaultValue}</option>
            {options.map(item =>
                <option key={item.value} value={item.value}>{item.name}</option>
            )}
        </select>
    );
};

export default MySelect;
