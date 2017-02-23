import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');
/*
  props : 컴포넌트에서 사용할 데이터 중 변동되지 않는 데이터를 다룰 때 사용.
  headerTitle, contentTitle, contentBody : App.js에 props로 전달하기 위한 값
*/
ReactDOM.render(<App headerTitle = "Welcome!"                     
                     contentBody = "Welcome to example app"/>, rootElement);
