import Link from "next/link";
import MainContainer from "../components/MainContainer.js";


const Users = ({users}) => {
    console.log(users)
    // const [users, setUsers] = useState([
    //     {id: 1, name: 'Jo'},
    //     {id: 2, name: 'Sam'},
    // ])

    return (
        <MainContainer keywords={'users page'}>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user =>
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await resp.json()

    return {
        props: {users}, // will be passed to the page component as props
    }
}
