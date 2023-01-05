import React, {useState} from "react";
import "./App.css"
import {Link, Route, Routes, Outlet} from 'react-router-dom'
import {CSSTransition, SwitchTransition, TransitionGroup} from "react-transition-group";
import Layout from "./page/Layout.jsx";
import About from "./page/About.jsx";
import Contacts from "./page/Contacts.jsx";


// Transition

// function App() {
//     const [loaderVisible, setLoaderVisible] = useState(false)
//     const button = loaderVisible ? 'hide' : 'show'
//
//     const handleClickLoader = () => {
//         setLoaderVisible(!loaderVisible)
//     }
//
//     useEffect(() => {
//         setTimeout(() => {
//             setLoaderVisible(true)
//         }, 1000)
//
//         setTimeout(() => {
//             setLoaderVisible(false)
//         }, 4000)
//     }, [])
//
//     return (
//         <div className="app">
//             <button onClick={handleClickLoader}>{button}</button>
//             <div className='wrapLoader'>
//                 <Transition
//                     in={loaderVisible}
//                     timeout={500}
//                     mountOnEnter
//                     unmountOnExit
//                     onEnter={() => console.log('onEnter')}
//                     onEntering={() => console.log('onEntering')}
//                     onEntered={() => console.log('onEntered')}
//                     onExiting={() => console.log('onExiting')}
//                     onExited={() => console.log('onExited')}
//                     onExit={() => console.log('onExit')}>
//                     {state => <div className={`circle ${state}`}/>}
//                 </Transition>
//             </div>
//         </div>
//     )
// }


//// CSSTransition-


// function App() {
//     const [loaderVisible, setLoaderVisible] = useState(false)
//     const button = loaderVisible ? 'hide' : 'show'
//
//     const handleClickLoader = () => {
//         setLoaderVisible(!loaderVisible)
//     }
//
//
//     return (
//         <div className="app">
//             <button onClick={handleClickLoader}>{button}</button>
//             <div className='wrapLoader'>
//                 <CSSTransition
//                 in={loaderVisible}
//                 classNames={{
//                     enterActive: 'circle-show',
//                     enterDone: 'circle-rotate',
//                     exitActive: 'circle-hide',
//                 }}
//                 timeout={500}
//                 mountOnEnter
//                 unmountOnExit
//                 >
//                     <div className='circle'></div>
//                 </CSSTransition>
//             </div>
//         </div>
//     )
// }


//  SwitchTransition


// function App() {
//     const [mode, setMode] = useState('out-in')
//     const [toggle, setToggle] = useState(false)
//
//     function changeHandler(e) {
//         setMode(e.target.value)
//     }
//
//     return (
//         <div className="app">
//             <div>
//                 <label className="label">out-in</label>
//                 <input onChange={(e) => changeHandler(e)} id='out-in' type="radio" name='radio' value='out-in'/>
//                 <label className="label">in-out</label>
//                 <input onChange={(e) => changeHandler(e)} id='in-out' type="radio" name='radio' value='in-out'/>
//             </div>
//             <SwitchTransition mode={mode}>
//                 <CSSTransition
//                     key={toggle}
//                     timeout={500}
//                     classNames='fade'>
//                     <button onClick={() => setToggle(!toggle)}>
//                         {toggle ? 'Hello world' : 'Goodbye world'}
//                     </button>
//                 </CSSTransition>
//             </SwitchTransition>
//         </div>
//     )
// }


// TransitionGroup

// function App() {
//     const [text, setText] = useState('')
//     const [todoList, setTodoList] = useState([
//         {id: 1, text: 'one text lorem'},
//         {id: 2, text: 'two lorem dolor'}
//     ])
//
//     function addTodo() {
//         setTodoList([...todoList, {id: Date.now(), text}])
//     }
//
//     return (
//         <div className="app">
//             <div>
//                 <input onChange={(e) => setText(e.target.value)} type="text" value={text}/>
//                 <button onClick={() => addTodo()}>Click</button>
//             </div>
//             <TransitionGroup component='ul'>
//                 {todoList.map(el =>
//                     <CSSTransition
//                         key={el.id}
//                         classNames='todo'
//                         timeout={500}>
//                         <li className='todo'
//                             onClick={() => setTodoList([...todoList].filter((todo => todo.id !== el.id)))}
//                         >
//                             {el.id} {el.text}
//                         </li>
//                     </CSSTransition>
//                 )}
//             </TransitionGroup>
//         </div>
//     )
// }



// Не вышло решение с анимацией страниц

// function App() {
//     const routes = [
//         {path: '/', Component: <Contacts/>},
//         {path: '/about', Component: <About/>},
//     ]
//
//     return (
//         <div className="app">
//             {/*<Routes path='/' element={<Layout />}>*/}
//             {/*    <Route index path='about' element={<About/>}/>*/}
//             {/*    <Route path='contacts' element={<Contacts/>}/>*/}
//             {/*</Routes>*/}
//             <div>
//                 <Link to='/'>Contacts</Link>
//                 <Link to='/about'>About</Link>
//             </div>
//             {/*<CSSTransition*/}
//             {/*    timeout={1000}*/}
//             {/*    classNames='page'*/}
//             {/*    unmountOnExit>*/}
//                 <Routes>
//                     {routes.map(({path, Component}) =>
//
//                         //     // <CSSTransition
//                         //     //     timeout={1000}
//                         //     //     classNames='pages'
//                         //     //     unmountOnExit>
//                         //     <Route key={path} path={path} element={Component}/>
//                         // // </CSSTransition>
//                         <Route key={path} path={path} element={Component} />
//                     )}
//                 </Routes>
//             {/*</CSSTransition>*/}
//             <div>
//                 <Outlet/>
//             </div>
//         </div>
//     )
// }

export default App
