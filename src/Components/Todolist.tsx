import React from 'react'

type TodoPropsType = {
  title: string
  tasks: Array<TasksArrayType>
  active: (activator: 'all' | 'active' | 'completed') => void
}

export type TasksArrayType = {
  id: number
  title: string
  isDone: boolean
}

function Todo(props: TodoPropsType) {
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
            <li key={item.id}>
              <input type='checkbox' checked={item.isDone} />
              <span>{item.title}</span>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={() => props.active('all')}>All</button>
        <button onClick={() => props.active('active')}>Active</button>
        <button onClick={() => props.active('completed')}>Completed</button>
      </div>
    </div>
  )
}

export default Todo
