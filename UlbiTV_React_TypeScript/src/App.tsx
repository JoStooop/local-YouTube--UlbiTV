import React, {useEffect, useState} from "react";
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {ITodo, IUser} from "./types/types";
import axios from "axios";
import List from "./components/List";
import UserItem from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {


    // const users: IUser[] = [
    //     {id: 1, name: 'Jo', email: 'adsf@yandex.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '123'}},
    //     {id: 2, name: 'Sam', email: 'info.boston@yandex.ru', address: {city: 'Boston', street: 'Pushkina', zipcode: '321'}}
    // ]

    return (
        <BrowserRouter>
            <div className="App">
                {/*<EventsExample />*/}
                {/*<Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px'*/}
                {/*      height='200px'>*/}
                {/*    <button>Click</button>*/}
                {/*</Card>*/}
                {/*<UserList users={users}/>*/}
                <div>
                    <NavLink to='/users'>Пользователи</NavLink>
                    <NavLink to='/todos'>Список дел</NavLink>
                </div>
                <Routes>
                    <Route path='/users' element={<UsersPage/>}/>
                    <Route path='/users/:id' element={<UserItemPage/>}/>
                    <Route path='/todos' element={<TodosPage/>}>
                        <Route path=':id' element={<TodoItemPage/>}/>
                    </Route>
                    {/*<Route path='/todos/:id'  element={<TodoItemPage />}/>*/}
                </Routes>

            </div>
        </BrowserRouter>
    )
}

export default App
