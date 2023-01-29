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

// ButtonPratice 의 스타일을 상속받아 필요한 CSS 추가·수정 할 수 있음 ( => 중복된 코드 양을 줄이고 재사용성 ↑ )
const MiniButton = styled(ButtonPratice)`
  background: silver;
  color: black;
  font-weight: 700;
`;

// ${props => props.값 ? true 속성 : false 속성}
const PropsButton = styled(ButtonPratice)`
  /* PropsButton 의 props age 가 25보다 크면 black(true), 작으면 yellow(false) */
  background: ${(props) => (props.age > 25 ? 'black' : 'yellow')};
  /* PropsButton props.basic 일 경우 red(true), 아닐 경우 black(false) */
  color: ${(props) => (props.basic ? 'red' : 'white')};
`;

const Input = styled.input.attrs((props) => ({
  // attrs 를 이용해서 고정 속성을 부여할 수 있음.
  type: 'password',
}))`
  width: ${(props) => props.size};
  border: 1px solid red;
  margin: 10px;
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
        <ButtonPratice onClick={ButtonHandler}>Button 2</ButtonPratice>
        {/* ButtonPratice 를 상속받아 필요한 CSS 속성만 추가 */}
        <MiniButton onClick={ButtonHandler}>Mini Button 1</MiniButton>
        <PropsButton basic age='26'>
          Props
        </PropsButton>
        <Input placeholder='Button' />
        <Input placeholder='Button 2' size={'120px'} />
      </Wrapper>
    </div>
  );
}
