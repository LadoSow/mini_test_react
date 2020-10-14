import React from 'react';
import FizzBuzzBloc from '../microcomposants/FizzBuzzBloc';
import FizzBuzzElementManager from '../microcomposants/FizzBuzzElementManager';

import { mount } from "enzyme";

it(" Devrait afficher fizzbuzz", () => {
  const mockState = {
    valeur: 12,
    fizzMultiple: 3,
    buzzMultiple: 4,
    action: 0
  };

  const FizzBuzzItemComponent = FizzBuzzElementManager(FizzBuzzBloc);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  var output = <span>FizzBuzz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});

it(" Devrait afficher fizz", () => {
  const mockState = {
    valeur: 6,
    fizzMultiple: 3,
    buzzMultiple: 4,
    action:0
  };

  const FizzBuzzItemComponent = FizzBuzzElementManager(FizzBuzzBloc);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  const output = <span>Fizz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});

it(" Devrait afficher buzz", () => {
  const mockState = {
    valeur: 8,
    fizzMultiple: 3,
    buzzMultiple: 4,
    action:0
  };

  const FizzBuzzItemComponent = FizzBuzzElementManager(FizzBuzzBloc);

  const fizzBuzzItemComponent = mount(
    <table>
      <tbody>
        <FizzBuzzItemComponent {...mockState} />
      </tbody>
    </table>
  );

  const output = <span>Buzz</span>;

  expect(fizzBuzzItemComponent.contains(output)).toEqual(true);
});
