import React, { useState } from 'react'
import { v1 } from 'uuid'
import './App.css'
import { AddItemForm } from './Components/AddItemForm'
import Todo, { TasksArrayType } from './Components/Todo'

export type FilterTypes = 'all' | 'completed' | 'active'
type TodoListType = {
  id: string
  title: string
  filter: FilterTypes
}
type TasksStateType = {
  [key: string]: Array<TasksArrayType>
}

function App() {
  function deleteTask(id: string, todolistId: string) {
    let tasks = tasksObj[todolistId]
    let filtratedTasks = tasks.filter((item) => item.id !== id)
    tasksObj[todolistId] = filtratedTasks
    setTasks({ ...tasksObj })
  }

  const addTask = (text: string, todolistId: string) => {
    const task: TasksArrayType = {
      id: v1(),
      title: text,
      isDone: false,
    }
    let tasks = tasksObj[todolistId]
    let newTasks = [task, ...tasks]
    tasksObj[todolistId] = newTasks

    setTasks({ ...tasksObj })
  }

  const changeStatus = (taskId: string, isDone: boolean, todolistId: string) => {
    let tasks = tasksObj[todolistId]
    let task = tasks.find((item) => item.id === taskId)
    if (task) {
      task.isDone = isDone
      setTasks({ ...tasksObj })
    }
  }
  const changeTaskTitle = (taskId: string, newTitle: string, todolistId: string) => {
    let tasks = tasksObj[todolistId]
    let task = tasks.find((item) => item.id === taskId)
    if (task) {
      task.title = newTitle
      setTasks({ ...tasksObj })
    }
  }

  function changeFilter(value: FilterTypes, todolistId: string) {
    let todolist = todolists.find((e) => e.id === todolistId)
    if (todolist) {
      todolist.filter = value
      setTodoLists([...todolists])
    }
    // setTodoLists([...todolists])
  }
  function changeTodoListTitle(newTitle: string, todolistId: string) {
    let todolist = todolists.find((e) => e.id === todolistId)
    if (todolist) {
      todolist.title = newTitle
      setTodoLists([...todolists])
    }
  }

  const todolistId1 = v1()
  const todolistId2 = v1()

  let [todolists, setTodoLists] = useState<Array<TodoListType>>([
    {
      id: todolistId1,
      title: 'what to learn',
      filter: 'all',
    },
    {
      id: todolistId2,
      title: 'what to buy',
      filter: 'all',
    },
  ])

  const [tasksObj, setTasks] = useState<TasksStateType>({
    [todolistId1]: [
      { id: v1(), title: 'HTML&CSS', isDone: true },
      { id: v1(), title: 'JS', isDone: true },
      { id: v1(), title: 'ReactJS', isDone: false },
    ],
    [todolistId2]: [
      { id: v1(), title: 'Book', isDone: false },
      { id: v1(), title: 'Milk', isDone: true },
    ],
  })

  const addTodoList = (title: string) => {
    let newTodoList: TodoListType = {
      id: v1(),
      title: title,
      filter: 'all',
    }
    setTodoLists([...todolists, newTodoList])
    setTasks({ ...tasksObj, [newTodoList.id]: [] })
  }

  return (
    <div className='App'>
      <AddItemForm addItem={addTodoList} />
      {todolists.map((e) => {
        let filtratedTasks = tasksObj[e.id]
        if (e.filter === 'completed') {
          filtratedTasks = tasksObj[e.id].filter((item) => item.isDone)
        }
        if (e.filter === 'active') {
          filtratedTasks = tasksObj[e.id].filter((item) => !item.isDone)
        }
        if (e.filter === 'all') {
          filtratedTasks = tasksObj[e.id]
        }

        return (
          <Todo
            key={e.id}
            id={e.id}
            title={e.title}
            tasks={filtratedTasks}
            changeFilter={changeFilter}
            delete={deleteTask}
            addTask={addTask}
            changeStatus={changeStatus}
            changeTaskTitle={changeTaskTitle}
            filter={e.filter}
            changeTodoListTitle={changeTodoListTitle}
          />
        )
      })}
    </div>
  )
}

export default App
