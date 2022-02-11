class Login extends React.Component {
  constructor(props) {
    super(props);
    this.ref_input_name = React.createRef();
    this.ref_input_password = React.createRef();
    this.ref_div_status = React.createRef();
  }

  handle_login = async () => {
    try {
      const result1 = await axios({
        method: "post",
        url: "http://127.0.0.1/api/v1/login",
        data: {
          "name": this.ref_input_name.current.value,
          "password": this.ref_input_password.current.value
        }
      });
      this.props.actions.change_user_name(result1.data);
      this.props.actions.show_Items();
    } catch (err) {
      this.ref_div_status.current.innerHTML = err;
    }
  };

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "Login"
    }, /*#__PURE__*/React.createElement("h1", null, "Login"), /*#__PURE__*/React.createElement("input", {
      type: "text",
      ref: this.ref_input_name
    }), /*#__PURE__*/React.createElement("input", {
      type: "password",
      ref: this.ref_input_password
    }), /*#__PURE__*/React.createElement("button", {
      onClick: this.handle_login
    }, "Login"), /*#__PURE__*/React.createElement("div", {
      ref: this.ref_div_status
    }));
  }

}

export default Login;