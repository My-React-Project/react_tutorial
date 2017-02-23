import React from 'react';
import update from 'react-addons-update';

class App extends React.Component {
  render() {
    return (
      <Contacts/>
    );
  }
}

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: [
        { name: "Abet", phone: "010-5639-2911" },
        { name: "Betty", phone: "010-3412-3412" },
        { name: "Chalie", phone: "010-0382-3337" },
        { name: "David", phone: "010-4618-3827" },
      ]
    };
  }

  /* 데이터 추가
    this.setState({
      list: update(
        this.state.list,
        {
          $push: [newObj, newObj2]
        }
      )
    });
  */
  addContact(name, phone) {
    let newContact = update(this.state, {
      contactData: {
        $push: [{"name": name, "phone": phone}]
      }
    });
    this.setState(newContact);
  }

  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <ul>
          {this.state.contactData.map((contact, i) => {
            return (<ContactInfo name = {contact.name}
                                 phone = {contact.phone}
                                 key = {i}/>);

          })}
        </ul>
        <ContactCreator onInsert={this.addContact.bind(this)}/>
      </div>
    );
  }
}

class ContactInfo extends React.Component {
  render() {
    return(
      <li>{this.props.name} {this.props.phone}</li>
    );
  }
}

class ContactCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    }
  }
  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }
  handleClick() {
    this.props.onInsert(this.state.name, this.state.phone);
    this.setState({
      name: "",
      phone: ""
    });
  }
  render() {
    return(
      <div>
        <p>
          <input type="text" name="name" placeholder="name"
                 value={this.state.name} onChange={this.handleChange.bind(this)}/>
          <input type="text" name="phone" placeholder="phone"
                 value={this.state.phone} onChange={this.handleChange.bind(this)}/>
           <button onClick={this.handleClick.bind(this)}>
             Insert
          </button>
        </p>
      </div>
    )
  }
}

export default App;
