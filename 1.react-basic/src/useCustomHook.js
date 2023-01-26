import React from 'react';
import { useState } from 'react';
// custom hook 을 사용하기 위해 useInput import.
import useInput from './hooks/useInput';

// 1. 커스텀 훅 내부에서 다른 Hook ( useEffect, useState ,,,)을 사용할 수 있음.
// 2. 각 컴포넌트 마다 독립적으로 사용 => 재사용성 ↑

// 커스텀 훅(Custom Hook)을 정의 할 때 함수 앞에 use를 붙여야 함 ( useInput, useFatch,, )
export default function useCustomHook() {
  // const [yourName, setYourName] = useState('');
  const [yourName, setYourNames] = useInput('');
  const [arr, setArr] = useState([]);

  const buttonClick = (e) => {
    console.log('buttonClick 클릭');
    e.preventDefault();
    setArr([...arr, yourName]);
  };

  return (
    <div>
      <input
        type='text'
        // value={yourName}
        // onChange={(e) => setYourName(e.target.value)}
        // useInput 을 이용해서 간단하게 사용할 수 있음.
        {...setYourNames}
      />
      <button onClick={buttonClick}>Button</button>
      {arr.map((el, idx) => {
        return <p key={idx}>{el}</p>;
      })}
    </div>
  );
}
