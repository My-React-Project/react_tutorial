import React from 'react';

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

export default App;
