import axios from "axios";
import { createContext, useEffect, useState } from "react";

const TodoListContext = createContext();

function TodoListContextProvider(props) {
    const [todoList, setTodoList] = useState([])

    useEffect(async () => {
        const fetchTodos = async () => {
            const res = await axios.get('http://localhost:8080/todos');
            setTodoList(res.data.todos)
        };
        fetchTodos();
    }, []);

    const addTodo = () => {

    }

    return <TodoListContext.Provider value={{ todoList, setTodoList }}>
        {props.children}
    </TodoListContext.Provider>
}

export default TodoListContextProvider;
export { TodoListContext };