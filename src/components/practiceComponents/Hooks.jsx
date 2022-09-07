import { useState } from "react";
const Hooks = () => {
  // destructuring
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}> Increase count +</button>
      <button onClick={decrease}> Decrease count -</button>
    </div>
  );
};

export default Hooks;
