import React from 'react';
import FizzBuzzListe from '../microcomposants/FizzBuzzListe';

import { mount } from "enzyme";

it("Devrait afficher FizzBuzzListe correctement", () => {
  const mockState = {
    limit: 17,
    fizzMultiple: 3,
    buzzMultiple: 5,
    action: 0
  };

  const fizzBuzzListComponent = mount(<FizzBuzzListe {...mockState} />);

  expect(fizzBuzzListComponent.find(".fizzbuzz-element").length).toEqual(1);
  expect(fizzBuzzListComponent.find(".fizz-element").length).toEqual(4);
  expect(fizzBuzzListComponent.find(".buzz-element").length).toEqual(2);
  expect(fizzBuzzListComponent.find(".basic-element").length).toEqual(10);
});

it("Devrait afficher FizzBuzzListe(Nouvelle exigence) correctement", () => {
  const mockState = {
    limit: 15,
    fizzMultiple: 3,
    buzzMultiple: 5,
    action: 1
  };

  const fizzBuzzListComponent = mount(<FizzBuzzListe {...mockState} />);

  expect(fizzBuzzListComponent.find(".fizzbuzz-element").length).toEqual(0);
  expect(fizzBuzzListComponent.find(".fizz-element").length).toEqual(6);
  expect(fizzBuzzListComponent.find(".buzz-element").length).toEqual(2);
  expect(fizzBuzzListComponent.find(".basic-element").length).toEqual(7);
});
