import React, { Component } from 'react';

import ElementFizz from './liste/ElementFizz';
import ElementBasique from './liste/ElementBasique';
import ElementBuzz from './liste/ElementBuzz';
import ElementFizzBuzz from './liste/ElementFizzBuzz';

const FizzBuzzElementManager = WrappedComponent => {
  
    class FizzBuzzBlocWrapper extends Component {
      afficheFizzBuzzProps(valeur) {
        const { fizzMultiple, buzzMultiple, action} = this.props;

        if (action===1) {
          //FizzBuzz Nouvelle Exigence
          const fizzResultat = valeur % fizzMultiple;
          const buzzResultat = valeur % buzzMultiple;
          const verif = this.verifContient3ou5(valeur.toString());
          
          
          //Decide quel composant sera affiché en fonction des resultats
          if (fizzResultat === 0 && buzzResultat === 0 && verif === 1)
            return <ElementFizzBuzz />;
          else if (fizzResultat === 0 || verif === 1) return <ElementFizz />;
          else if (buzzResultat === 0 || verif === 2) return <ElementBuzz />;
          else return <ElementBasique valeur={valeur} />;
          
        } else {
          //FizzBuzz Normal
          const fizzResultat = valeur % fizzMultiple;
          const buzzResultat = valeur % buzzMultiple;
    
          if (fizzResultat === 0 && buzzResultat === 0)
            return <ElementFizzBuzz />;
          else if (fizzResultat === 0 ) return <ElementFizz />;
          else if (buzzResultat === 0 ) return <ElementBuzz />;
          else return <ElementBasique valeur={valeur} />;
          
        }
      }

      verifContient3ou5(chaine){
        for (let index = 0; index < chaine.length; index++) {
          if (chaine.charAt(index) === '3') {
            return 1;
          } else if (chaine.charAt(index) === '5') {
            return 2;
          }
        }
        return 0;
      }
  
      render() {
        //Le manager affiche les composants
        return (
          <WrappedComponent {...this.props}>
            {valeur => this.afficheFizzBuzzProps(valeur)}
          </WrappedComponent>
        );
      }
    }
  
    return FizzBuzzBlocWrapper;
};

export default FizzBuzzElementManager ;
  