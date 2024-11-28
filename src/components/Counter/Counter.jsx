import React, { useRef, useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const inputRef = useRef(null);
  const steps = inputRef?.current?.value || 1;
  const resetCounter = () => {
    setCounter(0);
  };

  const incrementCounter = () => {
    setCounter((prev) => Number(prev) + Number(steps));
  };
  const decrementCounter = () => {
    setCounter((prev) => Number(prev) - Number(steps));
  };
  const test = () => {
    console.log("hello executed directly");
  };

  const arr = [1, 2, 3, 4, 5, 6, 7];
  arr.forEach((val, i) => {
    for (let i = 0; i < val; i++) {
      console.log(val);
    }
  });

  //Observer notifying all observers

  class Subject {
    constructor() {
      this.observer = [];
    }
    addObserver(observer) {
      this.observer.push(observer);
    }
    notifyObservers() {
      this.observer.forEach((e) => e.update());
    }
  }

  class Observer {
    update() {
      console.log("I am notified");
    }
  }
  const subject = new Subject();
  const observer1 = new Observer();
  const oberserver2 = new Observer();
  subject.addObserver(observer1);
  subject.addObserver(oberserver2);
  subject.notifyObservers();
  function testdata(a) {
    return function () {
      console.log(a); // Logs `a`
      a = 23; // Reassigns `a` in the inner function
    };
  }

  testdata(45)();

  let x = {},
    y = { name: "Ronny" },
    z = { name: "John" };
  x[y] = { name: "Vivek" };
  console.log(x);

  return (
    <div className="w-[500px]">
      <h1>Counter - {counter}</h1>
      <div className="flex gap-6 w-full">
        <div className="p-4 bg-slate-400" onClick={test()}>
          Increment
        </div>
        <div className="p-4 bg-slate-400" onClick={() => decrementCounter()}>
          Decrement
        </div>
        <div className="p-4 bg-slate-400" onClick={() => resetCounter()}>
          Reset Counter\
        </div>
        <input
          type="text"
          placeholder="step"
          ref={inputRef}
          onChange={() => {
            console.log(inputRef.current.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Counter;
