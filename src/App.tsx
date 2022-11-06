import React, { useState } from 'react'
import { v1 } from 'uuid'
import './App.css'
import Todo, { TasksArrayType } from './Components/Todolist'

export type FilterTypes = 'all' | 'completed' | 'active'

function App() {
  const [tasks, setTasks] = useState<Array<TasksArrayType>>([
    { id: v1(), title: 'HTML&CSS', isDone: true },
    { id: v1(), title: 'JS', isDone: true },
    { id: v1(), title: 'ReactJS', isDone: false },
  ])

  const [filter, setFilter] = useState<FilterTypes>('all')

  let filtratedTasks = tasks
  if (filter === 'completed') {
    filtratedTasks = tasks.filter((item) => item.isDone)
  }
  if (filter === 'active') {
    filtratedTasks = tasks.filter((item) => !item.isDone)
  }
  if (filter === 'all') {
    filtratedTasks = tasks
  }

  function toFilter(value: FilterTypes) {
    setFilter(value)
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((item) => item.id !== id))
  }

  const addTask = (text: string) => {
    const newTask: TasksArrayType = {
      id: v1(),
      title: text,
      isDone: false,
    }
    setTasks([newTask, ...tasks])
  }

  const changeStatus = (taskId: string, isDone: boolean) => {
    let task = tasks.find((item) => item.id === taskId)
    if (task) task.isDone = isDone

    setTasks([...tasks])
  }

  return (
    <div className='App'>
      <Todo
        title={'This week'}
        tasks={filtratedTasks}
        changeFilter={toFilter}
        delete={deleteTask}
        addTask={addTask}
        changeStatus={changeStatus}
        filter={filter}
      />
    </div>
  )
}

const arr = {
  pipeline_id: 4212961,
  _embedded: {
    contacts: [
      {
        first_name: 'Теееест',
        last_name: 'Теееест Теееест',
        custom_fields_values: [
          {
            field_code: 'PHONE',
            values: [{ value: ' 7 (916) 036-35-01', enum_code: 'MOB' }],
          },
          {
            field_code: 'EMAIL',
            values: [{ value: 'tsudzuki@yandex.ru', enum_code: 'PRIV' }],
          },
          { field_id: 679691, values: [{ value: 'Теееест' }] },
        ],
      },
    ],
  },
  custom_fields_values: [
    { field_id: 688715, values: [{ value: '12' }] },
    { field_id: 682031, values: [{ value: '' }] },
    {
      field_id: 688717,
      values: [
        {
          value: 'https://storage.yandexcloud.net/smarent-public-storage/4d5a3838-34ae-4041-b18c-fa22caaf0210.docx',
        },
      ],
    },
    {
      field_id: 688719,
      values: [
        {
          value: 'https: //storage.yandexcloud.net/smarent-public-storage/1847326b-b8a1-47ea-970a-daa863cbad8a.docx',
        },
      ],
    },
    { field_id: 681113, values: [{ value: 'Telegram' }] },
    { field_id: 681115, values: [{ value: '' }] },
    { field_id: 681111, values: [{ value: 'Ничего дополнительно не нужно = 0' }] },
    {
      field_id: 511267,
      values: [{ value: 'https: //smarent.com/podbor/lite/oferta/payment' }],
    },
  ],
  responsible_user_id: 7842370,
}

export default App
