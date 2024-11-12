import { useState } from "react";

function App() {

  const [color, setColor] = useState('olive')

  // is function ko use kar k b color ko change kiya ja sakta hai 
  // or dicert setColor method se b change kar sakte hai
  // function changeColor(color) {
  //   setColor(color)
  // }

  return (
    <>
      <div className="w-full h-screen duration-200" 
      style={{backgroundColor: color}}>
        <div
          className="fixed flex flex-wrap justify-center bottom-12
          inset-x-0 px-2"
        >
          <div
            className="flex flex-wrap justify-center gap-3 shadow-lg
          bg-white px-6 py-3 rounded-full"
          >
            <button
              className="outline-none px-5 py-3 rounded-lg shadow-lg
            text-white font-semibold"
            onClick={() => setColor('red')}
            style={{backgroundColor: 'red'}}
            >
              RED
            </button>

            <button
              className="outline-none px-5 py-3 rounded-lg shadow-lg
            text-white font-semibold"
            onClick={() => setColor('green')}
            style={{backgroundColor: 'green'}}
            >
              GREEN
            </button>

            <button
              className="outline-none px-5 py-3 rounded-lg shadow-lg
            text-white font-semibold"
            onClick={() => setColor('blue')}
            style={{backgroundColor: 'blue'}}
            >
              BLUE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
