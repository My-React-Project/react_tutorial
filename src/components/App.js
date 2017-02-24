import React from 'react';
import update from 'react-addons-update';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            show: false
        }
    }

    _increase() {
        this.setState({
            number: this.state.number + 1
        });
    }

    _show() {
        this.setState({show: true});
    }

    _unmount() {
        this.setState({number: 0, show: false});
    }

    render() {
        let component = (<Card number={this.state.number}/>);
        return (
            <div>
                <Button caption="Show Card" customClass="green" onClick={this._show.bind(this)}/>
                <Button caption="Increase Number" customClass="blue" onClick={this._increase.bind(this)}/>
                <Button caption="Unmount Card" customClass="red" onClick={this._unmount.bind(this)}/> {this.state.show
                    ? component : ""}
            </div>
        );
    }
}

class Button extends React.Component {
    render() {
        let className = "ui button " + this.props.customClass;

        return (
            <div onClick={this.props.onClick} className={className}>{this.props.caption}</div>

        )
    }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    console.log("constructor");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps: " + JSON.stringify(nextProps));
  }

  shouldComponentUpdate(nextProps, nextState) {
    if(JSON.stringify(nextProps) != JSON.stringify(this.props)) {
      console.log("shouldComponentUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
      return true;
    }
    return false;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("componentWillUpdate: " + JSON.stringify(nextProps) + " " + JSON.stringify(nextState));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: " + JSON.stringify(prevProps) + " " + JSON.stringify(prevState));
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  render() {
    console.log("render");
    return (
      <div className="ui card">
        <div className="content">
          number: {this.props.number}
        </div>
      </div>
    )
  };
}

export default App;
