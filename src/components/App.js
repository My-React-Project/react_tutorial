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
      ],
      selectedKey: -1,
      selected: {
        name: "",
        phone: ""
      }
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

  /* 데이터 제거
    this.setState({
      list: update(
        this.state.list,
        {
          $splice: [[index, 1]]
        }
      )
    })
  */
  deleteContact() {
    if(this.state.selectedKey == -1) {
      console.log("contact not selected");
      return;
    }
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          $splice: [[this.state.selectedKey, 1]]
        }
      ),
      selectedKey: -1
    });
  }

  /* 데이터 수정
    this.setState({
      list: update(
        this.stae.list,
        {
          [index]: {
            field: {$set: "value"},
            field2: {$set: "value2"}
          }
        }
      )
    });
  */
  modifyContact(name, phone) {
    this.setState({
      contactData: update(
        this.state.contactData,
        {
          [this.state.selectedKey]: {
            name: { $set: name },
            phone: { $set: phone }
          }
        }
      ),
      // modify input의 value값까지 바꿔주기 위해 변경
      selected: {
        name: name,
        phone: phone
      }
    })
  }

  onSelect(key) {
    if(key==this.state.selectedKey) {
      console.log("key select cancelled");
      this.setState({
        selectedKey: -1,
        selected: {
          name: "",
          phone: ""
        }
      });
      return;
    }
    this.setState({
      selectedKey: key,
      selected: this.state.contactData[key]
    });
    console.log(key + " is selected");
  }

  isSelected(key) {
    if(this.state.selectedKey == key) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <div>
        <h1 id="hello">Contacts</h1>
        <ul>
          {this.state.contactData.map((contact, i) => {
            {/* isSelected : 선택되었는 지에 대한 체크는 바로 실행 되어야 함. */}
            return (<ContactInfo name = {contact.name}
                                 phone = {contact.phone}
                                 key = {i}
                                 contactKey = {i}
                                 isSelected = {this.isSelected.bind(this)(i)}
                                 onSelect = {this.onSelect.bind(this)}/>);

          })}
        </ul>
        <ContactCreator onInsert={this.addContact.bind(this)}/>
        <ContactRemover onRemove={this.deleteContact.bind(this)}/>
        <ContactEditor onEdit={this.modifyContact.bind(this)}
                       contact={this.state.selected}
                       isSelected={(this.state.selectedKey != -1)}/>
      </div>
    );
  }
}

class ContactInfo extends React.Component {
  handleClick() {
    this.props.onSelect(this.props.contactKey);
  }

  render() {
    let selectedStyle = isSelect => {
      if(!isSelect) return;

      let style = {
        fontWeight: 'bold',
        backgroundColor: '#4efcd8'
      }
      return style;
    }

    return(
      <li style={selectedStyle(this.props.isSelected)}
          onClick={this.handleClick.bind(this)}>
          {this.props.name} {this.props.phone}
      </li>
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

class ContactRemover extends React.Component {
  handleClick() {
    this.props.onRemove();
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>
        Remove selected contact
      </button>
    );
  }
}

class ContactEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: ""
    };
  }

  handleClick() {
    if(!this.props.isSelected) {
      console.log("contact not selected");
      return;
    }
    // contactEditor의 상위 컴포넌트에서 전달받은 onEdit props를 이용하여 데이터 수정
    this.props.onEdit(this.state.name, this.state.phone);
  }

  handleChange(e) {
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  // 컴포넌트 업데이트 직전에 새로운 값을 받는 Component Life Cycle 메소드
  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.contact.name,
      phone: nextProps.contact.phone
    });
  }

  render() {
    return (
      <div>
        <p>
          <input type="text" name="name" placeholder="name"
                 value={this.state.name} onChange={this.handleChange.bind(this)}/>
          <input type="text" name="phone" placeholder="phone"
                 value={this.state.phone} onChange={this.handleChange.bind(this)}/>
          <button onClick={this.handleClick.bind(this)}>Edit</button>
        </p>
      </div>
    );
  }
}

export default App;
