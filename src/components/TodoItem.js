// import EditTodo from './EditTodo';

function TodoItem(props) {
  const deleteTodo = () => {
    props.deleteTodo(props.todoItem.id)
  }

  const changeCompleteTodo = () => {
    props.changeCompleteTodo(props.todoItem.id)
  }

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
      props.todoItem.completed ? 'success' : 'warning'
    }`}>
      {/* <EditTodo /> */}
      <span>{props.todoItem.title}</span>
      <div className="btn-group">
        <button className="btn btn-info rounded-0" onClick={changeCompleteTodo} >
          <i className={`fas fa-toggle-${props.todoItem.completed ? 'on' : 'off'}`} />
        </button>
        <button className="btn btn-danger rounded-0" onClick={deleteTodo}  > 
          <i className="far fa-trash-alt" />
        </button>
      </div>
    </li>
  );
}

export default TodoItem;