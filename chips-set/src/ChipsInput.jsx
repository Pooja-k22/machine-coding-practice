import React, { useState } from "react";

function ChipsInput() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const handleAdd = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const val = input.trim();
      if (val && !data.includes(val)) {
        setData((d) => [...d, val]);
        setInput("");
      } else {
        setInput("");
      }
    }
  };

  const handleDelete = (d) => {
    const filtered = data.filter((i) => i != d);
    setData(filtered);
  };
  console.log(data);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        style={{ padding: "8px", width: "200px" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleAdd}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "20px",
          gap: "4px",
        }}
      >
        {data?.map((i) => (
          <div
            style={{
              borderRadius: "16px",
              padding: "7px",
              backgroundColor: "gray",
            }}
          >
            {i}{" "}
            <span
              style={{ marginLeft: "20px", color: "red" }}
              onClick={() => handleDelete(i)}
            >
              X
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChipsInput;
