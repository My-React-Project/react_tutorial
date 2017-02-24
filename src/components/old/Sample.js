import React from 'react';

class App extends React.Component {

  sayHey() {
    alert("Hey")
  }

  render() {
    let text = "React World";

    let pStyle = {
      color: 'aqua',
      backgroundColor: 'black'
    };

    function sayHey() {
      alert("hey");
    }

    return (
      <div> {/* component를 감싸는 최상위 Element가 필수  */}
        <h1>Hello React Tutorial</h1>
        <h2>Welcome to {text}</h2> {/* Js 표현은 {}로 wrapping 하여 사 */}

        {/* method 사용 시 ()를 붙일 경우 페이지가 로드 될때 실행 됨. */}
        <button onClick={sayHey}>Click Me</button> {/* local method 사용 */}
        <button onClick={this.sayHey}>Click Me</button> {/* class method 사용 */}

        {/* JSX에서 Js의 If-Else문을 사용할 수 없기 때문에 삼항연산을 이용하여 구현*/}
        <p style = {pStyle}>{ typeof(text) === "number" ? text : "Text is not String"}</p>
      </div>
    );
  }
}

export default App;
