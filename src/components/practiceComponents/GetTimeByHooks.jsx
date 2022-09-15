import { useState } from "react";
const GetTimeByHooks = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const [isMouseHover, setMouseHove] = useState(false);
  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  const handleMouseOver = () => {
    setMouseHove(true);
  };
  const handleMouseOut = () => {
    setMouseHove(false);
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>{time}</h1>
      <button
        style={{ backgroundColor: isMouseHover ? "black" : "white" }}
        onClick={updateTime}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Get Current Time
      </button>
    </div>
  );
};

export default GetTimeByHooks;
