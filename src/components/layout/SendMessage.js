import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addMessage } from "../../actions/action";

const SendMessage = ({ addMessage, currentuser }) => {
  const [message, setMessage] = useState("");

  const onChange = e => {
    setMessage(e.target.value);
  };

  const onPress = e => {
    if (e.key === "Enter") {
      addMessage(message, currentuser.name);
      setMessage("");
    }
  };

  const onSend = () => {
    addMessage(message, currentuser.name);
    setMessage("");
  };

  const chatinfo = name => {
    return "Say hi to " + name + "...";
  };
  let input;
  return (
    <div className="type_msg">
      <div className="input_msg_write">
        <input
          type="text"
          onKeyPress={onPress}
          className="write_msg"
          placeholder={chatinfo(currentuser.name)}
          onChange={onChange}
          value={message}
        />
        <button className="msg_send_btn" onClick={onSend} type="submit">
          {" "}
          <i className="fa fa-paper-plane btn-icon" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

SendMessage.propTypes = {
  addMessage: PropTypes.func.isRequired,
  currentuser: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  messages: state.messages,
  currentuser: state.currentuser
});

export default connect(mapStateToProps, { addMessage })(SendMessage);
