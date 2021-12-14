import EditTodo from './EditTodo';
import { useState } from 'react'


function TodoItem(props) {
  console.log(props)
  // const {id, title, completed } = props;
  const [editMode, setEditMode] = useState(false);
  const [edited, setEdited] = useState(props.todoItem.title)

  const deleteTodo = () => {
    props.deleteTodo(props.todoItem.id)
  }

  const changeCompleteTodo = () => {
    props.changeCompleteTodo(props.todoItem.id)
  }

  const handleClick = e => {e.preventDefault()
    setEditMode(!editMode)
    console.dir(e.target)
  }

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
      props.todoItem.completed ? 'success' : 'warning'
    }`}>
      {/* <EditTodo /> */}
      {
        editMode === true 
        ? <EditTodo editTodo={props.todoItem.title} onPressCancel={setEditMode} />
        : <><span onClick={handleClick} value={props.todoItem.title}>{props.todoItem.title}</span>
        <div className="btn-group">
        <button className="btn btn-info rounded-0" onClick={changeCompleteTodo} >
          <i className={`fas fa-toggle-${props.todoItem.completed ? 'on' : 'off'}`} />
        </button>
        <button className="btn btn-danger rounded-0" onClick={deleteTodo}  > 
          <i className="far fa-trash-alt" />
        </button>
      </div>
      </>

      }
      {/* <span onClick={editTodo}>{props.todoItem.title}</span> */}
      
    </li>

  );
}



export default TodoItem;