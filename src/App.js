import React, { Component } from 'react';

import FizzBuzzAction from './microcomposants/FizzBuzzAction'
import FizzBuzzListe from './microcomposants/FizzBuzzListe';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 100,
      fizzMultiple: 3,
      buzzMultiple: 5,
      action:0
    };
  }

  handleStateChange = (fieldName, valeur) => {
    this.setState({ [fieldName]: valeur });
  };

  render() {
    return (
      <div className="app container">
        <h1 className="header-title">React Fizz-Buzz</h1>
        <FizzBuzzAction {...this.state} onPropsChange={this.handleStateChange} />
        <FizzBuzzListe {...this.state} />
      </div>
    );
  }
}
export default App;
