import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import Stats from "./components/Stats";

const initialCounters = [
  {
    id: 1,
    value: 0,
  },
  {
    id: 2,
    value: 0,
  },
];
function App() {
  const [counters, setCounters] = useState(initialCounters);

  const totalCount = counters.reduce((sum, current) => sum + current.value, 0);

  const handleIncrement = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: counter.value + 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  const handleDecrement = (id) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === id) {
        return {
          ...counter,
          value: counter.value - 1,
        };
      }
      return counter;
    });
    setCounters(updatedCounters);
  };

  return (
    <>
      <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
        <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Aplication
        </h1>

        <div className="max-w-md mx-auto mt-10 space-y-5">
          {counters.map((counter) => (
            <Counter
              key={counter.id}
              count={counter.value}
              onIncrement={() => handleIncrement(counter.id)}
              onDecrement={() => handleDecrement(counter.id)}
            />
          ))}
          <Stats totalCount={totalCount} />
        </div>
      </div>
    </>
  );
}

export default App;
