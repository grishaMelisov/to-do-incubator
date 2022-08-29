import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import { FilterTypes } from '../App'

type TodoPropsType = {
  title: string
  tasks: Array<TasksArrayType>
  filter: (value: FilterTypes) => void
  delete: (id: string) => void
  addTask: (text: string) => void
  changeCheckBox: () => void
}

export type TasksArrayType = {
  id: string
  title: string
  isDone: boolean
}

function Todo(props: TodoPropsType) {
  const [inputText, setInputText] = useState('')

  console.log(inputText)

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setInputText(event.currentTarget.value)

  const buttonHandler = () => {
    props.addTask(inputText)
    setInputText('')
  }

  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    console.log(event)
    if (event.key === 'Enter') buttonHandler()
  }

  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <input value={inputText} onChange={inputHandler} onKeyDown={keyDownHandler} />
        <button onClick={buttonHandler}>add</button>
      </div>
      <ul>
        {props.tasks.map((item) => {
          return (
            <li key={item.id}>
              <input type='checkbox' checked={item.isDone} onClick={() => props.changeCheckBox()} />
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
