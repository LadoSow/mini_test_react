import React from 'react';
import PropTypes from 'prop-types';

//Micro composant 
export default function ElementBasique({valeur}){
    return (
        <td className="basic-element">
          <span>{valeur}</span>
        </td>
    );
}

ElementBasique.propTypes = {
    valeur: PropTypes.number
};