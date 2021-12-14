import { useState } from 'react'

function EditTodo(props) {
  const [input, setInput] = useState(props.editTodo)

  const handleChange = e => {
    setInput(e.target.value)
  }

  // const handleChangeEdit = e => {

  // }

    return (
      <form className="flex-grow-1" onSubmit={e => e.preventDefault()} >
        <div className="input-group">
          <input onChange={handleChange} value={input} type="text" className="form-control rounded-0" />
          <button className="btn btn-primary rounded-0" > {/*onClick={handleClickEdit}*/}
            <i className="far fa-edit" />
          </button>
          <button className="btn btn-danger rounded-0" onClick={() => props.onPressCancel(prev=>!prev)}>
            <i className="fas fa-times" />
          </button>
        </div>
      </form>
    );
  }
  
  export default EditTodo;