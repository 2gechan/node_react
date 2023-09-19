import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./redux/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button onClick={() => dispatch(decrement())}>1씩 감소</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>1씩 증가</button>
      </div>
    </div>
  );
}

export default App;
