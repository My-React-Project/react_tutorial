import React from 'react';

class App extends React.Component {

  handleClick() {
    this.input.value = "This is TextBox"
  }

  render() {
    return (
      <div>
        {/* <TextBox ref={ref => this.textBox = ref}/> */}
        <input ref={ref => this.input = ref}/>
        <button onClick={this.handleClick.bind(this)}>Click Me</button>
      </div>
    );
  }
}

class TextBox extends React.Component {
  render() {
    return (
      <div>
        {/*
          {ref => this.input = ref}
          =>
          function(ref) {
            return this.input = ref;
          }
        */}
        <input ref={ref => this.input = ref}></input>
      </div>
    )
  }
}

export default App;
