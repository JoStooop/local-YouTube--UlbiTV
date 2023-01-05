import React, {useCallback, useState} from 'react'
import './App.css'
import {SomeComponent} from "./components/SomeComponent";

// const getList = () => [1, 2, 3, 4, 5]

function App() {
    const [count, setCount] = useState(0)
    // const list = React.useMemo(() => getList(), [])

    const increment = useCallback(() => setCount(prev => prev + 1), [])

    console.log('app')

    return (
        <div className="App">
            <h1>{count}</h1>
            {/*<SomeComponent list={list}/>*/}
            <SomeComponent increment={increment}/>
        </div>
    )
}

export default App
