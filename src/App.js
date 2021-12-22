import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';

/*
This exercise will help you practice many of your newly aquired React skills.
The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  constructor(props){
  super(props);    
  this.state={
    messages: [],
    users: [{ username: 'Amy' }, { username: 'John' }]
  	}
  }

  addMessage=(message)=>{
    console.log('app: ', message);
    this.setState(oldState => ({
      messages: [...oldState.messages, message],
    }));
  }
  
  render() {
    const messages=this.state.messages;
    const users = this.state.users;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          <ChatWindow username={users[0].username} messages={messages} sendMessage={this.addMessage}/>
 		  <ChatWindow username={users[1].username} messages={messages} sendMessage={this.addMessage}/>      
        </div>
      </div>
    );
  }
}

export default App;
