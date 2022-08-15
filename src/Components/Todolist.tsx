import React from 'react'

type TodoProps = {
  title: string
  tasks: Array<ArrTypes>
}
type ArrTypes = {
  id: number
  title: string
  isDone: boolean
}

function Todo(props: TodoProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input />
        <button>+</button>
      </div>
      <ul>
        {props.tasks.map((item) => {
          return (
            <li>
              <input type='checkbox' checked={item.isDone} />
              <span>{item.title}</span>
            </li>
          )
        })}
        {/* <li>
          <input type='checkbox' checked={true} /> <span>GIT</span>
        </li>
        <li>
          <input type='checkbox' checked={true} /> <span>GIT</span>
        </li>
        <li>
          <input type='checkbox' checked={true} /> <span>JS</span>
        </li>
        <li>
          <input type='checkbox' checked={false} /> <span>React</span>
        </li> */}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export default Todo
