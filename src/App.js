import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import './App.css';
import RemainingMessage from './components/RemainingMessage';

const initialTodoList = [
  { id:uuidv4(), title: 'Watching a movie', completed: false},
  { id:uuidv4(), title: 'Meet a doctor', completed: false},
  { id:uuidv4(), title: 'Dinner with my family', completed: true}
];

// const previousTodo = [a, b, c] // nextTodo = [d, a, b, c]
// previousTodo.unshift(d)
// const nextTodo = previousTodo.slice(0);
// nextTodo.splice(0, 0, d)
// const nextTodo =[d, ...previousTodo]

function App() {
  const [todoList, setTodoList] = useState(initialTodoList);
  const [status, setStatus] = useState(0); // 0 = all, 1 = complete, 2 = uncomplete
  // const [searchTerm, setSearchTerm] = useState({ text: '', status: '' });
  const [searchStatus, setSearchStatus] = useState('');
  const [searchText, setSearchText] = useState('');

  const createTodo = title => {
    const nextTodo =[{ id: uuidv4(), title: title, completed: false }, ...todoList];
    setTodoList(nextTodo);
  };

  const deleteTodo = id => {
    let newTodo = [...todoList]
    let delId = newTodo.findIndex(el => id === el.id)
    if (delId !== -1) {
      newTodo.splice(delId, 1)
    }
    setTodoList(newTodo);
  }

  const changeCompleteTodo = id => {
    let newCompleteTodo = [...todoList]
    let changeCompleteId = newCompleteTodo.findIndex(el => id === el.id)
    newCompleteTodo[changeCompleteId].completed = !newCompleteTodo[changeCompleteId].completed;
    setTodoList(newCompleteTodo)
  }

  // const updateTodo = (id, value) => {
  //   const idx = todoList.findIndex(el => el.id === id);
  //   const newTodolist = [...todoList];
  //   if (idx !== -1) {
  //     newTodolist[idx] = {...newTodolist[idx], ...value };
  //   }
  //   setTodoList(newTodolist)
  // }

  const pendingTodoList = todoList.filter(el => !el.completed)

  const filteredTodoList = todoList.filter(
    item => 
    item.title.toLowerCase().includes(searchText.toLowerCase()) && 
    (searchStatus === '' || item.completed === searchStatus)
  );

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
        <AddTodo createTodo={createTodo} />
        <SearchBar 
          searchStatus={searchStatus} 
          setSearchStatus={setSearchStatus} 
          setSearchText={setSearchText} 
          searchText={searchText} />
        <RemainingMessage 
          remaining={pendingTodoList.length} 
          total={todoList.length} />
        <TodoList 
          todoList={filteredTodoList} 
          deleteTodo={deleteTodo} 
          changeCompleteTodo={changeCompleteTodo} />
      </div>  
    </div>
  );
}

export default App;
