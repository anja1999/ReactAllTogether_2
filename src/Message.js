import React from "react";
import PropTypes from 'prop-types';

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

Message.propTypes = {
  index: PropTypes.number.isRequired,
  message: PropTypes.object.isRequired,
  userNameToCompare: PropTypes.string.isRequired
};

export default Message;