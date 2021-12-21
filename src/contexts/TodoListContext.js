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

    const addTodo = async value => {
        const res = await axios.post('http://localhost:8080/todos', value);
        setTodoList(prev => [res.data.todo, ...prev]);
    };

    const updateTodo = async (id, value) => {
        
    }

    const deleteTodo = async id => {
        const res = await axios.delete(`http://localhost:8080/todos/${id}`);
        const idx = todoList.findIndex(item => id === item.id);
        const newTodoList =[...todoList];
        if (newTodoList !== -1) {
            newTodoList.splice(idx, 1)
        }
        setTodoList(newTodoList);
    }


    return <TodoListContext.Provider value={{ todoList, addTodo, updateTodo, deleteTodo }}>
        {props.children}
    </TodoListContext.Provider>
}

export default TodoListContextProvider;
export { TodoListContext };