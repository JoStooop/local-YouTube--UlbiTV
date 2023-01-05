import React from 'react';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className='navbar'>
            <nav className='navbar__items'>
                <Link to='/'>Главная</Link>
                <Link to='/posts'>Посты</Link>
            </nav>
            <h1>
                Это приложение создано!
            </h1>
        </div>
    );
};

export default About;
