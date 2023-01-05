import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

interface UserItemPageParams {
    id: string;
}

const UserItemPage: FC = () => {
    const [user, setUser] = useState<IUser | null>(null)

    // @ts-ignore
    const params = useParams<UserItemPageParams>()
    const navigate = useNavigate()
    console.log(navigate)

    const goBack = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate('/users')
    }

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const resp = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
            setUser(resp.data)
        } catch (er) {
            console.log(er)
        }
    }

    return (
        <div>
            <button onClick={goBack}>Back</button>
            <h1>Страница пользователя {user?.name}</h1>
            <div>
                {user?.email}
            </div>
            <div>
                {user?.address.city} {user?.address.street} {user?.address.zipcode}
            </div>
        </div>
    );
};

export default UserItemPage;
