import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ messages }) => {
  const renderedMessages = messages.map(message => (
    <div key={Math.random()} className={`alert alert-${message.type}`} role="alert">
      <p>{message.text}</p>
    </div>
  ));
  return <div>{renderedMessages}</div>;
};

// eslint-disable-next-line
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }).isRequired).isRequired,
};

export default Messages;
