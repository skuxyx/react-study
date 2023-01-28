// styled-component 를 사용하기 위해서는 npm 설치 후,
// import styled from 'styled-components'; import 한 후 사용.
import styled from 'styled-components';
import React from 'react';
// styled-component => CSS in JS, 스타일 정의를 별도의 CSS 파일에 작성하는 것이 아닌, JS 안에 바로 작성.

// const 변수 = styled.HTML엘리먼트`CSS property` 와 같이 사용함.

const Wrapper = styled.div`
  margin: 30px;
  border: 1px solid blueviolet;
  width: 500px;
`;

const ButtonPratice = styled.button`
  margin-left: 30px;
  margin-bottom: 30px;
  color: white;
  background: midnightblue;
  width: 100px;
  height: 100px;
`;

const Head = styled.h1`
  margin: 30px;
  color: skyblue;
`;

export default function useStyle() {
  const ButtonHandler = () => {
    console.log('Button Click');
  };

  return (
    <div>
      {/* div 속성을 사용한 것과 같음 */}
      <Wrapper>
        {/* h1 속성을 사용한 것과 같음  */}
        <Head>Styled-Component Pratice</Head>
        {/* Button 속성을 사용한 것과 같음  */}
        <ButtonPratice onClick={ButtonHandler}>Button 1</ButtonPratice>
        <ButtonPratice onClick={ButtonHandler}>Button 1</ButtonPratice>
      </Wrapper>
    </div>
  );
}
