import { createGlobalStyle } from 'styled-components';

// 최상위 컴포넌트에 GlobalStyle 을 추가하면, 모든 하위 컴포넌트에 스타일이 적용됨.
// 공통적으로 적용하고자 하는 CSS를 GlobalStyle 안에 작성해서 전역적으로 사용할 수 있음.

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
