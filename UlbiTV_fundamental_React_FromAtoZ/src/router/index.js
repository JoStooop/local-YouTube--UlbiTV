import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

export const privateRoutes = [
    {path: '/', element: About, exact: true },
    {path: '/posts', element: Posts, exact: false},
    {path: '/posts/:id', element: PostIdPage, exact: false},
]

export const publicRoutes = [
    {path: '/login', element: Login, exact: true},

]
