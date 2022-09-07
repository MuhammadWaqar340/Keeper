import { useState } from "react";
const GetTimeByHooks = () => {
  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);
  const updateTime = () => {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };
  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={updateTime}>Get Current Time</button>
    </div>
  );
};

export default GetTimeByHooks;
