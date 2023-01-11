import React, { useState } from 'react';
import { useEffect } from 'react';
// 1. useEffect 를 활용하기 위해서는 import { useEffect } from 'react';

export default function UseEffect() {
  // useEffect
  // => 컴포넌트가 마운트(처음 나타났을때), 업데이트(다시 렌더링), 언마운트(사라질 때) 특정 작업을 처리하고자 할 경우.

  // 1. useEffect(() => { 코드 }) => 컴포넌트가 처음 렌더링 될 때, 다시 렌더링될 때 실행.
  // 2. useEffect(() => { 코드 },[]) => 빈 배열을 줄 경우 화면에 처음 렌더링 될 때만 실행.
  // 3. useEffect(() => { 코드 }, [value]) => 컴포넌트가 처음 렌더링 될 때, 배열안의 value 값이 바뀔 때 실행.
  //                             ========= => dependency array.

  // Clean up => 정리작업.
  // useEffect(() => { 코드 } return () => { }) => useEffect의 return 값으로 함수를 넣어줌.

  const [inputText, setInputText] = useState('');

  const changeInput = (event) => {
    setInputText(event.target.value);
  };

  //     useEffect(() => {
  //       console.log('input 값이 수정될 때 마다 계속 실행됨.');
  //     });

  //     useEffect(() => {
  //       console.log('input 값이 수정될 때 마다 계속 실행됨.');
  //     }, [inputText]);

  //   useEffect(() => {
  //     console.log('실행될 때 한 번만 실행.');
  //   }, []);

  return (
    <div>
      <input type='text' onChange={changeInput} placeholder='입력하세요.' />
      <p>{inputText}</p>
    </div>
  );
}
