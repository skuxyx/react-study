import React from 'react';
import { useState } from 'react';

// 커스텀 훅(Custom Hook)을 정의 할 때 함수 앞에 use를 붙여야 함 ( useInput, useFatch,, )
export default function useInput() {
  const [input, setInput] = useState('');

  const inputBox = {
    input, // input : input 와 동일.
    onChange: (e) => setInput(e.target.value),
  };

  return [input, inputBox];
}
