// useReducer => useState 와 비슷하게 state를 관리할 수 있음.
// 컴포넌트 외부에서 작성 가능. ( useState 의 경우 컴포넌트 내부에 작성 )

// Dispatch(action) -----------> Reducer(state, action) => state update.
// action => dispatch(요구사항)
// dispatch => Reducer 에게 요구.
// reducer => state update.

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
  // const [<상태 객체>, <dispatch 함수>] = useReducer(<reducer 함수>, <초기 상태>, <초기 함수>)
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <>
      Count: {count}
      {/* + 버튼 클릭 시, dispatch 가 Reducer 에게 요구. 
          action 객체의 type 속성 'increment' => reducer 함수에서 처리. */}
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      {/* - 버튼 클릭 시, dispatch 가 Reducer 에게 요구. 
          action 객체 type 속성 'decrement' => reducer 함수에서 처리. */}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
}
