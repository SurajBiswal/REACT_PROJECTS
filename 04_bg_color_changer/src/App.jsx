import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full flex h-screen justify-center  duration-200"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap text-center	
        justify-center bottom-12 insert-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center 
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl"
        >
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-5 rounded-xl"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-5 rounded-xl"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-5 rounded-xl"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => {
              setColor("pink");
            }}
            className="outline-none px-5 rounded-xl"
            style={{ backgroundColor: "Pink" }}
          >
            Pink
          </button>

          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-5 rounded-xl"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => {
              setColor("Brown");
            }}
            className="outline-none px-5 rounded-xl"
            style={{ backgroundColor: "brown" }}
          >
            Brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
