import A from "./A.js";
import Head from "next/head.js";

const MainContainer = (props) => {
    const {children, keywords} = props

    return (
        <>
            <Head>
                <meta keywords={'UlbiTV Next-js' + ' ' + keywords}></meta>
                <title>Главная страница</title>
            </Head>
            <div className="navbar">
                <A href="/" text="Главная"/>
                <A href="/users" text="Пользователи"/>
            </div>
            <div>
                {children}
            </div>
            <style jsx>
                {`
                  .navbar {
                    background: orange;
                    padding: 15px;
                  }
                `}
            </style>
        </>
    );
};

export default MainContainer;
