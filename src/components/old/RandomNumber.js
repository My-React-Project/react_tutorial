import React from 'react';
import ReactDOM from 'react-dom';

class RandomNumber extends React.Component {
  updateNumber() {
    let value = Math.round(Math.random()*100);
    this.props.onUpdate(value);
  }

  constructor(props) {
    super(props);
    /*
     ES6 class에선 auto binding이 되지 않으므로, 메소드를 bind 해주어야 함.
     bind 하지 않으면 멤버 함수 및 객체에 접근 할 수 없슴.
    */
    this.updateNumber = this.updateNumber.bind(this);
  }

  render() {
    return (
      <div>
        <h1>RANDOM NUMBER: { this.props.number }</h1>
        <button onClick={ this.updateNumber }>Randomize</button>
      </div>
    );
  }
}

export default RandomNumber;
