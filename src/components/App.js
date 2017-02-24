import React from 'react';

/* Class를 이용한 Component 정의
class App extends React.Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    );
  }
}
*/

/*
  Component가 Life Cycle API를 사용하지 않고, state도 사용하지 않고,
  오직 props만 전달해주는 경우 함수형 방식으로 Component를 정의할 수 있음.
*/

/* 기본 함수형 Component
function App(props) {
  return (
    <div>
      Hello {props.name}
    </div>
  );
}
*/

/* Arrow Function Component
const App = (props) => {
  return (
    <div>Hello {props.name}</div>

  );
}
*/

const App = ({name}) => {
  return (
    <div>
      Hello {name}
    </div>
  );
}

export default App;
