import React from 'react';
import { useState, useEffect, useMemo } from 'react';

export default function useMemo2() {
  const [count, setCount] = useState(0);
  const [country, setCountry] = useState(true);

  // 원시(Primitive type) -----------------------------------------------
  //   const location = country ? 'Korea' : 'US';

  //   useEffect(() => {
  //     console.log('useEffect');
  //   }, [location]); // 처음 렌더링 될 때, location이 변할 때만 실행 됨.
  // --------------------------------------------------------------------

  // 객체(Object type) --------------------------------------------------
  // 1. count 값을 변경하면 App 컴포넌트 리렌더링 => location 변수 또한 재할당
  // => 원시타입과 다르게 객체 타입은 새로운 주소 값을 다시 받게 됨.

  // const location = { country: country ? 'Korea' : 'US' };

  // 3. 이러한 문제를 해결하고자 useMemo hook 을 사용.
  const location = useMemo(() => {
    return {
      country: country ? 'Korea' : 'US',
    };
  }, [country]);

  useEffect(() => {
    console.log('useEffect');
  }, [location]); // 2. 따라서, 24라인 객체가 동일하게 생겼더라도, 새로운 주소값을 할당받으므로 계속 호출 되는 것.
  // --------------------------------------------------------------------

  return (
    <div>
      <h1>Count</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click
      </button>
      <p>현재 {count}</p>
      <h1>Country</h1>
      <p>{location.country}</p>
      <button
        onClick={() => {
          setCountry(!country);
        }}
      >
        Click
      </button>
    </div>
  );
}
