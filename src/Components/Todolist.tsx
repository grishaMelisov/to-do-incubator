import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FilterTypes } from '../App'

type TodoPropsType = {
  title: string
  tasks: Array<TasksArrayType>
  changeFilter: (value: FilterTypes) => void
  delete: (id: string) => void
  addTask: (text: string) => void
  changeStatus: (taskId: string, isDone: boolean) => void
  filter: FilterTypes
}

export type TasksArrayType = {
  id: string
  title: string
  isDone: boolean
}

function Todo(props: TodoPropsType) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setTitle(event.currentTarget.value)

  const addTask = () => {
    if (title.trim() === '') return setError(true)
    props.addTask(title)
    setTitle('')
  }

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(false)
    if (event.key === 'Enter') addTask()
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input
          className={error ? 'error' : ''}
          value={title}
          onChange={inputHandler}
          onKeyDown={keyDownHandler}
        />
        <button onClick={addTask}>add</button>
        {error && <div className='error-message'>field is required</div>}
      </div>
      <ul>
        {props.tasks.map((item) => {
          const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(item.id, event.currentTarget.checked)
          }

          return (
            <li key={item.id} className={item.isDone ? 'is-done' : ''}>
              <input
                type='checkbox'
                checked={item.isDone}
                onChange={checkboxHandler}
              />
              <span>{item.title}</span>
              <button onClick={() => props.delete(item.id)}>x</button>
            </li>
          )
        })}
      </ul>
      <div>
        <button
          className={props.filter === 'all' ? 'active-filter' : ''}
          onClick={() => props.changeFilter('all')}
        >
          All
        </button>
        <button
          className={props.filter === 'active' ? 'active-filter' : ''}
          onClick={() => props.changeFilter('active')}
        >
          Active
        </button>
        <button
          className={props.filter === 'completed' ? 'active-filter' : ''}
          onClick={() => props.changeFilter('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  )
}

export default Todo
