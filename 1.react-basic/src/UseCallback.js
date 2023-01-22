// useMemo 메모이제이션을 이용한 것과 비슷.
// useMemo => 값의 재사용을 위해 사용,
// useCallback => 함수의 재사용을 위해 사용.

import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';

export default function UseCallback() {
  const [count, setCount] = useState(0);

  const counter = useCallback(() => {
    console.log(`count => ${count}`);
    return;
  }, [count]);

  useEffect(() => {
    console.log('counter update');
  }, [count]);

  return (
    <div>
      <input
        type='number'
        value={count}
        // count state update.
        onChange={(e) => setCount(e.target.value)}
      />
      <button onClick={counter}>Click</button>
    </div>
  );
}
