import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FizzBuzzElementManager from './FizzBuzzElementManager';
import FizzBuzzBloc from './FizzBuzzBloc';

export default class FizzBuzzListe extends Component {
    render() {
      const { limit} = this.props;

      const ItemList = Array.apply(null, { length: limit + 1 }).map((_, i) => {
        if (i>0) {
          var AfficheFizzBuzzBloc = FizzBuzzElementManager(FizzBuzzBloc );
          return <AfficheFizzBuzzBloc key={i} valeur={i} {...this.props} />;
        }
        return null;
      });
  
      return (
        <div className="fizz-buzz-liste">
          <table className="table table-light table-striped">
            <tbody>{ItemList}</tbody>
          </table>
        </div>
        
      );
    }
  }

FizzBuzzListe.propTypes = {
    limit: PropTypes.number,
    fizzMultiple: PropTypes.number,
    buzzMultiple: PropTypes.number,
    action: PropTypes.number
};