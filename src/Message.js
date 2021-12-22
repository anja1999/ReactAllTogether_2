import React from "react";

const Message = props => {
  
  const {index, message, userNameToCompare} = props;
  
  return(
        <li
            key={index}
            className={message.username === userNameToCompare ?
                       'message sender' :
                       'message recipient'}>
                  <p>{`${message.username}: ${message.text}`}</p>
        </li>
  )
}

export default Message;