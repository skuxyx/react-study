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
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
