// React 에서 데이터의 흐름은 위에서 아래(부모 컴포넌트 -> 자식컴포넌트)로 Props 를 통해 전달.

// E 컴포넌트에 데이터를 전달하고자 할 경우 App -> A -> C -> E.
// D 컴포넌트에 데이터를 전달하고자 할 경우 App -> B -> D.
// => A, C, B 는 데이터를 필요로하지 않더라도 데이터를 받아서 전달해야하는 문제 발생.
// => Context 를 활용하면 데이터를 필요로하는 자식 컴포넌트에만 전달할 수 있음.

//      App Component
//    A              B
//    C              D
//    E

// useContext 사용 예시.
// 1. AgeContext.js 를 생성하고, import createContext
import { createContext } from 'react';
export const AgeContext = createContext(null);

// 2. App Component
import { AgeContext } from './AgeContext';

function App() {
  return (
    <>
      {/* Provider 을 이용해서 value 값으로 20을 전달. */}
      <AgeContext.Provider value='20'>
        <Age />
      </AgeContext.Provider>
    </>
  );
}

// 3. Age.js
const Age = () => {
  const age = useContext(AgeContext);
  return <p>귀하의 나이는 {age} 입니다.</p>;
};
