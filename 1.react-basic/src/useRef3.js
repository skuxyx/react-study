import React, { useEffect, useRef } from 'react';

// useRef 를 활용한 DOM 요소 접근방법.
// 페이지에 들어올 때 input에 선택(focus)되도록 함.

export default function UseRef3() {
  const input = useRef();

  useEffect(() => {
    console.log(input); // {current : undefined}
    input.current.focus(); //
  }, []); // [] 배열 => 맨 처음 렌더링 될 때만 실행.

  return (
    <div>
      <input type='text' ref={input} placeholder='제목을 입력하세요.' />
      <button onClick={click}>작성</button>
    </div>
  );
}
