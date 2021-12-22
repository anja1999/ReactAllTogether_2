import React, { Component } from 'react';
import SendMessage from './SendMessage';
import PropTypes from 'prop-types';
import Message from './Message';

class ChatWindow extends Component{
   static propTypes = {
     messages : PropTypes.array.isRequired,
     username : PropTypes.string.isRequired,
     sendMessage : PropTypes.func.isRequired
    };
  
  sendMessage =(message)=>{
    let newMessage = { username : this.props.username, text:message};
    this.props.sendMessage(newMessage);
  }
  
  render(){
    const {messages, username} = this.props
    return (
      <div className="chat-window">
            <h2>Super Awesome Chat</h2>
            <div className="name sender">{username}</div>			
            <ul className="message-list">
              {messages.map((message, index) => (
                <Message  key={index} index={index} message={message} userNameToCompare={username}/>
              ))}
            </ul>			
           <SendMessage userName={username} sendMessage={this.sendMessage}/>
	 </div>
    )
  }  
}
export default ChatWindow;
