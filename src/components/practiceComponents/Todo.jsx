import { useState } from "react";
const Todo = () => {
  const [inputText, setinputText] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (event) => {
    const newValue = event.target.value;
    setinputText(newValue);
  };

  const handleOnClick = () => {
    setItems((preItems) => {
      return [...preItems, inputText];
    });
    setinputText("");
  };
  return (
    <div>
      <h1>TODO</h1>
      <input
        type="text"
        name="todo"
        placeholder="Todo"
        style={{ padding: "5px" }}
        value={inputText}
        onChange={handleChange}
      />
      <button
        onClick={handleOnClick}
        style={{ padding: "5px", marginLeft: "5px", color: "Blue" }}
      >
        +Add
      </button>
      <div style={{ margin: "5px" }}>
        <ul>
          {items.map((todoItems) => {
            return <li>{todoItems}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
