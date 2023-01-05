import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useAction";

const TodoList: FC = () => {
    const {todos, loading, limit, pagination, error} = useTypedSelector(state => state.todo)

    const {fetchTodos, setTodoPage} = useAction()

    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(pagination, limit)
    }, [pagination])


    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(todo =>
                <div key={todo.id}>{todo.id} - {todo.title}</div>
            )}
            <div style={{display: 'flex'}}>
                {pages.map(page =>
                    <div
                        key={page}
                        onClick={() => setTodoPage(page)}
                        style={{border: page === pagination ? '2px solid green' : "1px solid gray", padding: 10  }}>
                        {page}</div>
                )}
            </div>
        </div>
    );
};

export default TodoList;
