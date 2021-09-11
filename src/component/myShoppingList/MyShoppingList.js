import React, { useState } from 'react'

export default function MyShoppingList () {
  const [ myListTittle, setMyListTittle ] = useState("");
  const [ todos, setTodos ] = useState(["buy Milk", "buy Eggs", "Code  more"]);
  const [ input,  setInput ] = useState("");

  const addTittle = (e) => {
    setMyListTittle(e.target.value)
    console.log(myListTittle)
  }

  const addTodo = () => {
    console.log("💟 ", "I am working");
    setTodos([input, ...todos])
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <h2>
          <input value={ myListTittle } onChange={addTittle}/>
        </h2>
      </div>

      <input value={input}  onChange={e=> setInput(e.target.value)}/>
      <button onClick= {addTodo}>Add to my List</button>

      <div>
        <h2>{myListTittle}</h2>
        <ul>
          {todos.map(list =>(
            <li>{list}</li>))}
        </ul>
      </div>
    </div>
  )
}
