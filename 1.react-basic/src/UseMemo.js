// useMemo, useCallback 컴포넌트 성능 최적화.
// useMemo(Memoization) => 불필요한 리렌더링을 막고자 사용.
//                      => 연산 결과 값(value) 저장해두고 재사용.

// 1. import { useMemo } from 'react';
// 2. const value = useMemo(() => { return }, [])
// useMemo 첫번째 인자로 콜백함수, 두번째 인자로 배열(의존성 배열)

import React from 'react';
import { useState, useMemo } from 'react';

// 1. 함수 컴포넌트 외부에 numCount 함수.
const numCount = (num) => {
  console.log('redner');
  for (let i = 0; i < 9999999; i++) {}
  return num + 100;
};

const numCount2 = (num) => {
  console.log('re-render');
  return num + 1;
};

export default function UseMemo() {
  // 2. input 값을 변경할 경우 count 의 state 값이 변경되므로 리렌더링 => numCount 함수 다시 렌더링.
  const [count, setCount] = useState(0);
  const [count1, setCount2] = useState(0);

  // 3. useMemo 를 활용 => 조건이 만족될 때만 변수 초기화. ( 조건이 만족하지 않으면 컴포넌트가 리렌더링 되더라도 초기화 X, 이전 값을 사용.)
  const numCounter = useMemo(() => {
    return numCount(count);
  }, [count]); // count 가 변경되지 않으면 기존 값을 재사용.

  const numCounter2 = numCount2(count1);

  return (
    <div>
      <h1>일반계산</h1>
      <input
        type='number'
        value={count}
        onChange={(e) => setCount(parseInt(e.target.value))}
      />
      <p> + 100 = {numCounter} </p>

      <h1>useMemo</h1>
      <input
        type='number'
        value={count1}
        onChange={(e) => setCount2(parseInt(e.target.value))}
      />
      <p> + 1 = {numCounter2} </p>
    </div>
  );
}
