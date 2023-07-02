import {useRouter} from "next/router.js";
import styles from "../../styles/User.module.scss"
import MainContainer from "../../components/MainContainer.js";

export default function User(props) {
    const {userOne} = props
    const {query} = useRouter()

    return (
        <MainContainer keywords={userOne.name}>
            <div className={styles.user}>
                <h1>Пользователь c id {query.id}</h1>
                <div>Имя пользователя - {userOne.name}</div>
            </div>
        </MainContainer>
    );
};

export async function getServerSideProps({params}) {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
    const userOne = await resp.json()

    return {
        props: {userOne}, // will be passed to the page component as props
    }
}
