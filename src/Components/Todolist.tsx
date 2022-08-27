import React from 'react'
import { FilterTypes } from '../App'

type TodoPropsType = {
  title: string
  tasks: Array<TasksArrayType>
  filter: (value: FilterTypes) => void
  delete: (id: number) => void
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
              <button onClick={() => props.delete(item.id)}>x</button>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={() => props.filter('all')}>All</button>
        <button onClick={() => props.filter('active')}>Active</button>
        <button onClick={() => props.filter('completed')}>Completed</button>
      </div>
    </div>
  )
}

export default Todo
