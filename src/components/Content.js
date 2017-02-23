import React from 'react';

class Content extends React.Component {
  render() {
    return (
      <div>
        <h2>{ this.props.title }</h2>
        <p>{ this.props.body }</p>
      </div>
    )
  }
}

// props type 검증
Content.propTypes = {
  title: React.PropTypes.string, // string type이 아닌 경우 error
  body: React.PropTypes.string.isRequired //필수 props로 지정
};

export default Content;
