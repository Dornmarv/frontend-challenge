import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { switchUser } from "../../actions/action";

const Friends = ({ users, switchUser, currentusername }) => {
  const onSwitch = (name, id) => {
    switchUser(name, id);
  };
  return (
    <div className="inbox_people">
      <div className="headind_srch">
        <div className="welcome_heading">
          <h4>Welcome</h4>
        </div>
      </div>
      <div className="inbox_chat scroll">
        {users.map(user => (
          <div
            className={
              user.name === currentusername
                ? "chat_list active_chat"
                : "chat_list"
            }
            onClick={e => onSwitch(user.name, user.id)}
          >
            <div className="chat_people">
              <div className="chat_img">
                {" "}
                <img
                  className="avatar hide-on-small-only"
                  src={user.avatar}
                  alt="avatar"
                />{" "}
              </div>
              <div className="chat_ib">
                <h5 key={user.id}>{user.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Friends.propTypes = {
  switchUser: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  users: state.users,
  currentusername: state.currentuser.name
});

export default connect(mapStateToProps, { switchUser })(Friends);
