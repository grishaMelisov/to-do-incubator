import React, { ChangeEvent, KeyboardEvent, useState } from 'react'

type AddItemFormPropsType = {
  addItem: (text: string) => void
}
export function AddItemForm(props: AddItemFormPropsType) {
  const [title, setTitle] = useState('')
  const [error, setError] = useState(false)

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => setTitle(event.currentTarget.value)
  const keyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    setError(false)
    if (event.key === 'Enter') addTask()
  }
  const addTask = () => {
    if (title.trim() === '') return setError(true)
    props.addItem(title)
    setTitle('')
  }

  return (
    <div>
      <input className={error ? 'error' : ''} value={title} onChange={inputHandler} onKeyDown={keyDownHandler} />
      <button onClick={addTask}>add</button>
      {error && <div className='error-message'>field is required</div>}
    </div>
  )
}
