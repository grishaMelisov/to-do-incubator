import React, { ChangeEvent } from 'react'
import { isPropertySignature } from 'typescript'
import { FilterTypes } from '../App'
import { AddItemForm } from './AddItemForm'
import { EditableSpan } from './EditableSpan'

type TodoPropsType = {
  id: string
  title: string
  tasks: Array<TasksArrayType>
  changeFilter: (value: FilterTypes, todolistId: string) => void
  delete: (id: string, todolistId: string) => void
  addTask: (text: string, todolistId: string) => void
  changeStatus: (taskId: string, isDone: boolean, todolistId: string) => void
  changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
  filter: FilterTypes
  changeTodoListTitle: (newTitle: string, todolistId: string) => void
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
  const changeTodoListTitle = (newTitle: string) => {
    props.changeTodoListTitle(newTitle, props.id)
  }

  return (
    <div>
      <h3>
        <EditableSpan title={props.title} onChange={changeTodoListTitle} />
      </h3>
      <AddItemForm addItem={addTask} />
      <ul>
        {props.tasks.map((item) => {
          const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
            props.changeStatus(item.id, event.currentTarget.checked, props.id)
          }
          const onChangeTitleHandler = (newTitle: string) => {
            props.changeTaskTitle(item.id, newTitle, props.id)
          }
          const onClickHandler = () => props.delete(item.id, props.id)

          return (
            <li key={item.id} className={item.isDone ? 'is-done' : ''}>
              <input type='checkbox' checked={item.isDone} onChange={checkboxHandler} />
              <EditableSpan title={item.title} onChange={onChangeTitleHandler} />
              <button onClick={onClickHandler}>x</button>
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
