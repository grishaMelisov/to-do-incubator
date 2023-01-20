import React, { ChangeEvent } from 'react'
import { FilterTypes } from '../App'
import { AddItemForm } from './AddItemForm'

type TodoPropsType = {
  id: string
  title: string
  tasks: Array<TasksArrayType>
  changeFilter: (value: FilterTypes, todolistId: string) => void
  delete: (id: string, todolistId: string) => void
  addTask: (text: string, todolistId: string) => void
  changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void
  filter: FilterTypes
}

export type TasksArrayType = {
  id: string
  title: string
  isDone: boolean
}

function Todo(props: TodoPropsType) {
  const addTask = (title: string) => {
    props.addTask(title, props.id)
  }
  return (
    <div>
      <h3>{props.title}</h3>
      <AddItemForm addItem={addTask} />
      <ul>
        {props.tasks.map((item) => {
          const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(item.id, event.currentTarget.checked, props.id)
          }

          return (
            <li key={item.id} className={item.isDone ? 'is-done' : ''}>
              <input type='checkbox' checked={item.isDone} onChange={checkboxHandler} />
              <span>{item.title}</span>
              <button onClick={() => props.delete(item.id, props.id)}>x</button>
            </li>
          )
        })}
      </ul>

      <div>
        <button className={props.filter === 'all' ? 'active-filter' : ''} onClick={() => props.changeFilter('all', props.id)}>
          All
        </button>
        <button className={props.filter === 'active' ? 'active-filter' : ''} onClick={() => props.changeFilter('active', props.id)}>
          Active
        </button>
        <button className={props.filter === 'completed' ? 'active-filter' : ''} onClick={() => props.changeFilter('completed', props.id)}>
          Completed
        </button>
      </div>
    </div>
  )
}

export default Todo
