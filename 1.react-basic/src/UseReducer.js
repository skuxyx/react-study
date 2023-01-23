// useReducer => useState 와 비슷하게 state를 관리할 수 있음.
// 컴포넌트 외부에서 작성 가능. ( useState 의 경우 컴포넌트 내부에 작성 )

import React from 'react';
import { useReducer } from 'react';

const reducer = (state, action) => {
  console.log('reducer 호출');
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
};

export default function UseReducer() {
  // const [state, dispatch] = useReducer(reducer, initialState, init);
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      Count: {count}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
