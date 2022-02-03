// Needs State, Two Buttons, Event Handler

class App extends React.Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDencrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>Counter App</h1>

        <div>{this.state.count}</div>

        <button onClick={this.handleIncrease}>increase</button>
        <button onClick={this.handleDencrease}>decrease</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
