import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FizzBuzzBloc extends Component {
  render() {
    return (
      <tr className="fizz-buzz-bloc">
        {this.props.children(this.props.valeur)}
      </tr>
    );
  }
}

FizzBuzzBloc.propTypes = {
  valeur: PropTypes.number
};