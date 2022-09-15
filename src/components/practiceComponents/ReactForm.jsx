import { useState } from "react";
const ReactForm = () => {
  const [isMouseHover, setMouseHove] = useState(false);
  const [heading, setheading] = useState();
  const [onClick, setOnClick] = useState();
  const handleMouseOver = () => {
    setMouseHove(true);
  };
  const handleMouseOut = () => {
    setMouseHove(false);
  };

  const handleChange = (event) => {
    setheading(event.target.value);
  };

  const handleOnClick = () => {
    setOnClick(heading);
  };
  return (
    <div>
      <h1>Hello {onClick}</h1>
      <input
        type="text"
        placeholder="Enter Your Name..!"
        onChange={handleChange}
        value={heading}
      />
      <button
        style={{
          backgroundColor: isMouseHover ? "lightBule" : "white",
          margin: 5,
          padding: 5,
        }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleOnClick}
      >
        Submit
      </button>
    </div>
  );
};

export default ReactForm;
