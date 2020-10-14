import React from 'react';
import FizzBuzzBloc from '../microcomposants/FizzBuzzBloc';

import { mount } from "enzyme";

it("Devrait afficher la valeur correctement en tant qu'enfant", () => {
  const mockState = {
    valeur: 12
  };

  const childrenFN = valeur => (
    <td>
      <span>{valeur}</span>
    </td>
  );

  const fizzBuzzBlocComponent = mount(
    <table>
      <tbody>
        <FizzBuzzBloc {...mockState}>{valeur => childrenFN(valeur)}</FizzBuzzBloc>
      </tbody>
    </table>
  );

  const output = (
    <td>
      <span>{mockState.valeur}</span>
    </td>
  );

  expect(fizzBuzzBlocComponent.contains(output)).toEqual(true);
});
