import React from 'react';
import s from './MyButton.module.scss'

const MyButton = (props) => {
    const {children} = props

    return (
        <button className={s.button} {...props}>
            {children}
        </button>
    );
};

export default MyButton;
