import React, { useState, useRef } from 'react';

export default function UseRef2() {
  const [changeState, setChangeState] = useState(0);
  const cntRef = useRef(0);
  // console.log('Ref => ' + cntRef); // Object type

  let cnt = 0;

  const stateButton = () => {
    setChangeState(changeState + 1);
  };

  const refButton = () => {
    cntRef.current += 1;
    console.log(cntRef.current);
  };

  const cntButton = () => {
    cnt += 1;
    console.log(cnt);
  };

  return (
    <div>
      <button type='button' onClick={stateButton}>
        State
      </button>
      <button type='button' onClick={refButton}>
        useRef
      </button>
      <button type='button' onClick={cntButton}>
        cnt
      </button>
      <p>
        {`useState =>`} {changeState} <br />
        {`useRef =>`} {cntRef.current} <br />
        {`cnt =>`} {cnt}
      </p>
    </div>
  );
}
