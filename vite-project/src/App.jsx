import {useEffect, useState} from "react";

function App() {
  const [numbers, setNumbers] = useState("1,3,2,5,1,1,6,5,5");
  const [target, setTarget] = useState("15");
  const [result, setResult] = useState([]);

  useEffect(() => {
    const arr = numbers.split(",").map(Number);
    const targetValue = Number(target);

    let shortest = [];

    for (let i = 0; i < arr.length; i++) {
      let sum = 0;
      let temp = [];

      for (let j = i; j < arr.length; j++) {
        sum += arr[j];
        temp.push(arr[j]);

        if (sum === targetValue) {
          if (shortest.length === 0 || temp.length < shortest.length) {
            shortest = [...temp];
          }
        }
      }
    }

    setResult(shortest);
  }, [numbers, target]);

  return (
    <div style={{padding: "30px", fontFamily: "Arial"}}>
      <h2>Shortest Subarray Sum</h2>

      <input
        type="text"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
        placeholder="Enter numbers"
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "10px",
        }}
      />

      <br />

      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        placeholder="Target sum"
        style={{
          padding: "10px",
          width: "300px",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "10px",
          marginTop: "25px",
          flexWrap: "wrap",
        }}
      >
        {result.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "12px 16px",
              background: "green",
              color: "white",
              borderRadius: "6px",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
