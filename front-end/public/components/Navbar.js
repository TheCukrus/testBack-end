class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "Navbar"
    }, /*#__PURE__*/React.createElement("h1", null, "Navbar"), /*#__PURE__*/React.createElement("h2", null, this.props.user_name), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.actions.show_Login
    }, "Login"), /*#__PURE__*/React.createElement("button", {
      onClick: this.props.actions.show_Items
    }, "Items"));
  }

}

export default Navbar;