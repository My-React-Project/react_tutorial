import React from 'react';
import Header from './Header';
import Content from './Content';

class App extends React.Component {
  render() {
    return (
      <div>
        {/*
          index.js에서 전달받은 props 값을 이용.
          이 props들을 child 컴포넌트로 또 한번 전달할 수도 있음.
        */}
        <Header title={ this.props.headerTitle }/>
        <Content title={ this.props.contentTitle }
                  body={ this.props.contentBody }/>
      </div>
    );
  }
}

// default props 설정
App.defaultProps = {
  headerTitle: 'Default Header',
  contentTitle: 'Default contentTitle',
  contentBody: 'Default contentBody'
}

export default App;
