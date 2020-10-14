import React from 'react';
import ElementFizzBuzz from '../microcomposants/liste/ElementFizzBuzz';

import { mount } from "enzyme";

it("Devrait afficher FizzBuzz", () => {
  const FizzBuzzComponent = mount(
    <table>
      <tbody>
        <tr>
          <ElementFizzBuzz />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>FizzBuzz</span>;

  expect(FizzBuzzComponent.contains(output)).toEqual(true);
});
