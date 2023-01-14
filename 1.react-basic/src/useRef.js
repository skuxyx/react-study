import React, { useState, useRef } from 'react';

// useRef => useState 와 비슷한 저장공간 역할.

// useRef 의 사용목적.

// 1. React에서 State 의 변화가 감지되면 => 리렌더링 => 컴포넌트의 내부 변수가 초기화됨.
//    useRef 에서는 Ref 안의 값이 변하더라도 => 리렌더링이 발생하지 않음 => 내부 변수 값이 유지 됨.

// 2. DOM(Document Object Model)요소에 접근할 때.
//

export default function UseRef() {
  const [cnt, setCnt] = useState(0);

  const cntRef = useRef(0);
  // console.log('Ref => ' + cntRef); // Object type

  const useStateCnt = (e) => {
    setCnt(cnt + 1);
  };

  // useRef를 눌러도 변화 없음 => 오류 or 아무 변화가 없는건지? => X
  // useRef는 버튼을 눌러도 렌더링이 되지 않으므로 변화가 없는 것.
  // => useState 버튼을 누르면 리렌더링이 발생하므로 useRef 의 카운터도 올라감.
  const useRefCnt = () => {
    cntRef.current += 1;
    console.log(cntRef.current);
  };

  return (
    <div>
      <button type='button' onClick={useStateCnt}>
        useState
      </button>
      <button type='button' onClick={useRefCnt}>
        useRef
      </button>
      <p>{'Cnt =>' + cnt}</p>
      <p>{'useRef =>' + cntRef.current}</p>
    </div>
  );
}
