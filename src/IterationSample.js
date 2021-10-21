import React, { useState } from 'react'

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: '눈사람' },
    { id: 2, text: '눈11' },
    { id: 3, text: '눈' },
    { id: 4, text: '눈람' },
  ])
  const [inputText, setInputText] = useState('')
  const [nextId, setNextId] = useState(5) // id 값의 초기값이 기존 데이터와 겹치지 않게 해야 한다.
  const onChange = (e) => setInputText(e.target.value)
  const onClick = () => {
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    })
    setNextId(nextId + 1)
    setNames(nextNames)
    setInputText('')
  }
  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id)
    setNames(nextNames)
  }
  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ))
  return (
    <div>
      <input type="text" value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </div>
  )
}

export default IterationSample
