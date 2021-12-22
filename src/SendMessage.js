import React, { Component } from 'react';

class SendMessage extends Component{
  state = {
    message :''
  }  

  handleChange=event=>{
    event.preventDefault();
    this.updateState(event.target.value );
  }
  
  updateState=(newValue)=>{
    this.setState({ message: newValue });
  }
  
  isDisabled = () => {
    return this.state.message === '';
  };
  
  sendNewMessage=event=> {
    event.preventDefault();  
    this.props.sendMessage(this.state.message);
    this.updateState('');
  }
  
  render(){
    return (
      	<div>
             <form className="input-group" onSubmit={this.sendNewMessage}>
               <input 
      			type="text" 
      			className="form-control" 
      			placeholder="Enter your message..." 
      			value={this.state.message}
				onChange={this.handleChange}/>
               <div className="input-group-append">
               <button className="btn submit-button" disabled={this.isDisabled()}>SEND</button>
                </div>
              </form>
            </div>
    )
  }
}

export default SendMessage;