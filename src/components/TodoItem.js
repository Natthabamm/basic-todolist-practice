import EditTodo from './EditTodo';

function TodoItem({ todo: { title, completed, id }  }) {
  
  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center py-3 bd-callout bd-callout-${
      completed ? 'success' : 'warning'}`}   >
        {/* <EditTodo /> */}
          <>
            <span>{title}</span>
            <div className="btn-group">
              <button className="btn btn-info rounded-0" >
                <i className={`fas fa-toggle-${completed ? 'on' : 'off'}`} />
              </button>
              <button 
                className="btn btn-danger rounded-0"  
              > 
                <i className="far fa-trash-alt" />
              </button>
            </div>
          </>
    </li>

  );
}

export default TodoItem;