import Navbar from "./Navbar.js";
import Login from "./Login.js";
import Items from "./Items.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: Login,
      user_name: "guest"
    };
    this.actions = {};

    this.actions.show_Login = () => {
      const temp = Object.assign({}, this.state);
      temp.show = Login;
      this.setState(temp);
    };

    this.actions.show_Items = () => {
      const temp = Object.assign({}, this.state);
      temp.show = Items;
      this.setState(temp);
    };

    this.actions.change_user_name = name => {
      const temp = Object.assign({}, this.state);
      temp.user_name = name;
      this.setState(temp);
    };
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Navbar, {
      user_name: this.state.user_name,
      actions: this.actions
    }), /*#__PURE__*/React.createElement(this.state.show, {
      actions: this.actions
    }));
  }

}

export default App;