import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";
import './counter.css';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div  className="btns">
      <div>
        <button
          className="btn"
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          className="btn"
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decremenmt
        </button>
      </div>
    </div>
  );
};

export default Counter;
