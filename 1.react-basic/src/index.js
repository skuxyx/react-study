import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// App.js import
import App from './App';
import reportWebVitals from './reportWebVitals';

// Public => 정적파일 ( image, html 등 )
// src => React 작업 폴더.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // 애플리케이션 내 잠재적인 문제를 알아내기 위한 도구로 활용.
  <React.StrictMode>
    {/* App ( app.js ) 코드를 화면에 출력 시켜 줌. */}
    {/* 컴포넌트에 데이터를 전달하고자 할 때 'props'를 사용. */}
    {/* 해당 예시에서는 App 자식 컴포넌트에 age=23 을 전달해 주고자 함. */}
    <App age={23} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
