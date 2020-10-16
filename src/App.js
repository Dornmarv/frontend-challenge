import React from "react";
import "./App.css";
import Friends from "./components/layout/Friends";
import Messages from "./components/layout/Messages";
import SendMessage from "./components/layout/SendMessage";
import { addUser } from "./actions/action";
import avatar1 from "./img/boy.svg";
import avatar2 from "./img/girl.svg";
import avatar3 from "./img/man.svg";
import avatar4 from "./img/boy-1.svg";
import avatar5 from "./img/girl-1.svg";
import avatar6 from "./img/man-1.svg";
import avatar7 from "./img/man-2.svg";
import avatar8 from "./img/man-3.svg";

//Redux
import { Provider } from "react-redux";
import store from "./store";

store.dispatch(addUser("Martin", avatar1));
store.dispatch(addUser("Jessie", avatar2));
store.dispatch(addUser("Alexander", avatar3));
store.dispatch(addUser("Eugene", avatar4));
store.dispatch(addUser("Lloyd", avatar5));
store.dispatch(addUser("Caleb", avatar6));
store.dispatch(addUser("Douglas", avatar7));
store.dispatch(addUser("Phoebe", avatar8));

const App = () => {
  return (
    <Provider store={store}>
      <div className="messaging">
        <div className="inbox_msg">
          <Friends />
          <div className="mesgs">
            <Messages />
            <SendMessage />
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;
