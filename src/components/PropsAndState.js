import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';

class App extends React.Component {

  constructor(props) {
    super(props);
    // state 초기값 설정. 생성자 내에서 설정.
    this.state = {
      value: Math.round(Math.random()*100)
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(randomValue) {
    // setstate()를 이용하여 state를 업데이트
    this.setState({
      value: randomValue
    });
  }

  render() {
    return (
      <div>
        {/*
          index.js에서 전달받은 props 값을 이용.
          이 props들을 child 컴포넌트로 또 한번 전달할 수도 있음.
        */}
        <Header title={ this.props.headerTitle }/>
        <Content title={ this.props.contentTitle }
                 body={ this.props.contentBody }
                 element={ this.props.elementProps }/>
        {/*
          state 값을 props를 통해 child 컴포넌트로 전달
          method또한 props로 전달 가능
        */}
        <RandomNumber number={ this.state.value }
                      onUpdate={ this.updateValue }/>
      </div>
    );
  }
}

// default props 설정
App.defaultProps = {
  headerTitle: 'Default Header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody',
  elementProps: <a href="http://www.google.com">google</a> // element도 props값으로 설정 가능
}

export default App;
