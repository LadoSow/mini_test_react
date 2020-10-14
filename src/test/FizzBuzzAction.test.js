import React from 'react';
import FizzBuzzAction from '../microcomposants/FizzBuzzAction';

import { mount } from 'enzyme';

it("Devrait mettre la valeur sur la propriete changé", () => {
  const mockState = {
    action: 0,
    onPropsChange: (field, valeur) => {
      console.log(`Changement ${field}:${valeur}`);
    }
  };

  const fizzBuzzForm = mount(<FizzBuzzAction {...mockState} />);

  const ActionInput = fizzBuzzForm.find("#action");

  expect(ActionInput.props().value).toEqual(0);
});
