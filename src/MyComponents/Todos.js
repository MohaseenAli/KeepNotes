import React from 'react'
import { TodoItem } from "./TodoItem"

const Todos = (props) => {
  let myStyle = {
    margin: "10px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='my-3'>Todos List</h3>
      {
        props.todos.length === 0 ? "No todos to dispaly" :
          props.todos.map((todo) => {
            return (
              <React.Fragment key={todo.sno}>
                <TodoItem todo={todo}  onDelete={props.onDelete} /><hr />
              </React.Fragment>
            )
          })
      }
    </div>
  )
}

export default Todos;
