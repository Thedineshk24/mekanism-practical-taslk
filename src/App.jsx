import {useState} from "react";

const App = () => {
  const [input, setInput] = useState("");

  const [numbers, setNumbers] = useState([]);

  const [targetSum, setTargetSum] = useState([]);

  // const [equalValue, setEqualValue] = useState([]);

  const handleSubmit = () => {
    if (input.trim == "") {
      return;
    }
    // if (equalValue) {
    //   const updatedTarget = numbers.map((item) =>
    //     item.id === equalValue ? {...item, text: input} : item,
    //   );
    //   setNumbers(updatedTarget);
    // } else {
    const item = {
      id: Date.now(),
      text: input,
    };
    setNumbers([...numbers, item]);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        height: "100vh",
      }}
    >
      <h1 style={{marginBottom: "44px"}}>My Task</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
        }}
      >
        <input
          type="text"
          placeholder="Add comma seperated numbers"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type="number"
          placeholder="Target SUM"
          value={targetSum}
          onChange={(e) => setTargetSum(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          FIND
        </button>
      </div>
      {numbers.map((item) => (
        <div
          className={`${targetSum === numbers ? "box" : ""} box`}
          key={item.id}
        >
          {item.text}
        </div>
      ))}
    </div>
  );
};

export default App;
