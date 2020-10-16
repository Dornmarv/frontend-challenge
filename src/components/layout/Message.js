import React from "react";
import PropTypes from "prop-types";

const Message = ({ message, author }) => {
  return (
    <div class="outgoing_msg">
      <div class="sent_msg">
        <p>{message}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Message;
