import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contacts">Blog</Link >
            </header>
            <main className="container">
                <Outlet/> {/*// куда потом будет отображаться весь основной контент*/}
            </main>
        </div>
    );
};

export default Layout;
