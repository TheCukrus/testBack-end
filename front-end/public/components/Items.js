class Items extends React.Component {
  constructor(props) {
    super(props);
    this.ref_input_file = React.createRef();
  }

  formData = new FormData();

  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "Items"
    }, /*#__PURE__*/React.createElement("h1", null, "Items"), /*#__PURE__*/React.createElement("input", {
      type: "file"
    }), /*#__PURE__*/React.createElement("button", null));
  }

}

export default Items;