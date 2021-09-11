import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
export default function MyShoppingList() {
  const classes = useStyles();
  const [myListTittle, setMyListTittle] = useState("");
  const [todos, setTodos] = useState(["buy Milk", "buy Eggs", "Code  more"]);
  const [input, setInput] = useState("");

  const addTittle = (e) => {
    setMyListTittle(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    console.log("💟 ", "I am working");
    setTodos([input, ...todos]);
    setInput("");
    setMyListTittle("");
    console.log(todos);
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form>
        <div>
          <h2>
            <input value={myListTittle} onChange={addTittle} />
          </h2>
        </div>
        
        <FormControl>
          <InputLabel >✍ Write Todo</InputLabel>
          <Input value={input} onChange={(e) => setInput(e.target.value)} />
        </FormControl>
        <Button
          type="submit"
          onClick={addTodo}
          disabled={!input}
          variant="contained"
          color="primary"
        >
          Add to my List
        </Button>
      </form>
      <h2>{myListTittle}</h2>
      <div>
        <ul>
          {todos.map((list) => (
            <li>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
