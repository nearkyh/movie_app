import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props)
  }

  state = {
    count: 0
  };

  add = () => {
    const { count } = this.state;
    // this.setState(current => ({ count: current.count + 1 }));
    this.setState({
      count: count +1
    });
  }
  minus = () => {
    this.setState({
      count: this.state.count -1
    });
  }

  componentDidMount() {
    console.log("mount")
  }

  componentDidUpdate() {
    console.log("update")
  }

  render() {
    console.log("rendering")
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
