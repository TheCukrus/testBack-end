class Items extends React.Component
{
    constructor(props)
    {
        super(props);
        this.ref_input_file = React.createRef();
    }

    formData = new FormData();

    render()
    {
        return (
            <div id="Items">
                <h1>Items</h1>
                <input type="file"></input>
                <button onClick={}></button>
            </div>
        );
    }
}

export default Items;