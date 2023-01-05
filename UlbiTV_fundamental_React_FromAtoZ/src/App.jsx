import React from 'react'
import './styles/reset.scss'
import './styles/App.scss'
import {Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import {privateRoutes, publicRoutes} from "./router";
import Login from "./pages/Login";

function App() {
    const isAuth = true

    return (
        // isAuth ?
            <Routes>
                {privateRoutes.map((route, i) =>
                    <Route key={route.path} path={route.path} element={<route.element/>} exact={route.exact}/>
                )}
            </Routes>
            // :
            // <Routes>
            //     {publicRoutes.map((route, i) =>
            //         <Route path={route.path} element={<route.element/>} exact={route.exact}/>
            //     )}
            // </Routes>
    )
}

export default App
