import './App.css';
import { useState } from 'react';

// React 에서 state 란? => 컴포넌트 상태.
// useState => 컴포넌트 상태를 관리하고 업데이트.

// 1. useState 를 활용하기 위해서는 import { useState } from 'react';
// 2. const [state, setState] = useState(초기값);
// 3. 상태값(초기값)은 state 변수, state를 변경하고자 할 경우 setState 함수를 이용함.

// 부모 컴포넌트(index.js)에서 받은 props를 파라미터를 통해 조회할 수 있음.
// 구조분해 할당을 이용해서 App({age}) 와 같이 간략하게 props 를 받아올 수 있다.
function App(props) {
  console.log('props => ' + props); // Object 객체 형태로 전달되므로,
  console.log('props data =>' + props.age); // age 값을 사용하고자 할 경우 props.age

  // 1. 초기값에 0 을 주었으므로 count = 0.
  const [count, setCount] = useState(0);

  const countPlus = () => setCount(count + 1);
  const countMinus = () => setCount(count - 1);
  return (
    <>
      <div>
        현재 숫자는 : {count}
        <button onClick={countPlus}>+</button>
        <button onClick={countMinus}>-</button>
        {props.age}
      </div>
    </>
  );
}

export default App;
