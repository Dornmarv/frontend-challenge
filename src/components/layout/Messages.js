import React from "react";
import PropTypes from "prop-types";
import Message from "./Message";
import { connect } from "react-redux";

const Messages = ({ messages, currentusername }) => {
  return (
    <div class="msg_history">
      {messages
        .filter(message => message.author === currentusername)
        .map(mess => (
          <Message key={mess.id} {...mess} />
        ))}
    </div>
  );
};

Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  messages: state.messages,
  currentusername: state.currentuser.name
});

export default connect(mapStateToProps, {})(Messages);
