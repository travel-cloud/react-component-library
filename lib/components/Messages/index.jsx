import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ messages }) => messages.map(message => (
  <div key={Math.random()} className={`alert alert-${message.type}`} role="alert">
    <p dangerouslySetInnerHTML={{ __html: message.text }} />
  </div>
));

// eslint-disable-next-line
Messages.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }).isRequired).isRequired,
};

export default Messages;
