import AddTodo from './components/AddTodo';
import SearchBar from './components/SearchBar';
import TodoList from './components/TodoList';
import RemainingMessage from './components/RemainingMessage';
import TodoListContextProvider from './contexts/TodoListContext';

function App() {

  return (
    <div className="container">
      <div className="mt-5 mx-auto mw-xs">
          <TodoListContextProvider>
            <AddTodo />
            <SearchBar />
            <RemainingMessage  />
            <TodoList />
          </TodoListContextProvider>
      </div>  
    </div>
  );
}

export default App;

