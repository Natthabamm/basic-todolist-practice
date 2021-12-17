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
  const [searchText, setSearchText] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const createTodo = title => {
    const nextTodo =[{ id: uuidv4(), title: title, completed: false }, ...todoList];
    setTodoList(nextTodo);
  };

  const deleteTodo = id => {
    const idx = todoList.findIndex(item => id === item.id)
    const newTodoList = [...todoList]
    if (newTodoList !== -1) {
      newTodoList.splice(idx, 1);
    }
    setTodoList(newTodoList);
  }

  const updateTodo = (id, {id : objId, ...value}) => {
    const idx = todoList.findIndex(item => item.id === id);
    const newTodolist = [...todoList];
    if (idx !== -1) {
      newTodolist[idx] = {...newTodolist[idx], ...value };
    }
    setTodoList(newTodolist)
  }

  const isEditTodo = (id, title) => {
    let newEditTodo = [...todoList]
    let changeCompleteId = newEditTodo.findIndex(el => id === el.id)
    newEditTodo[changeCompleteId].title = title;
    setTodoList(newEditTodo)
  }


  const pendingTodoList = todoList.filter(item => !item.completed)

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
          updateTodo={updateTodo}
          isEditTodo={isEditTodo}
          />
      </div>  
    </div>
  );
}

export default App;
