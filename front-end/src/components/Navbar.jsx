class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div id="Navbar">
                <h1>Navbar</h1>
                <h2>{this.props.user_name}</h2>
                <button onClick={this.props.actions.show_Login}>Login</button>
                <button onClick={this.props.actions.show_Items}>Items</button>
            </div>
        );
    }
}

export default Navbar;