import React, { useState } from 'react'

export default function MyShoppingList () {
  const [ myListTittle, setMyListTittle ] = useState("");
  const [ myList, setMyList ] = useState(["buy Milk", "buy Eggs", "Code  more"]);
  const [ inputShoppingList,  setInputShoppingList ] = useState("");

  console.log("😻 ",inputShoppingList )
  const addTitleList = (e) => {
    setMyListTittle(e.target.value)
    console.log(myListTittle)
  }

  const addMyShoppingList = () => {
    console.log("💟 ", "I am working");
    setMyList([inputShoppingList, ...myList])
  }

  return (
    <div>
      <h1>Shopping List</h1>
      <div>
        <h2>
          <input value={ myListTittle } onChange={addTitleList}/>
        </h2>
      </div>

      <input value={inputShoppingList}  onChange={e=> setInputShoppingList(e.target.value)}/>
      <button onClick= {addMyShoppingList}>Add to my List</button>

      <div>
        <h2>{myListTittle}</h2>
        <ul>
          {myList.map(list =>(
            <li>{list}</li>))}
        </ul>
      </div>
    </div>
  )
}
