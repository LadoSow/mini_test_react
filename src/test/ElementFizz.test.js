import React from 'react';
import ElementFizz from '../microcomposants/liste/ElementFizz';

import { mount } from "enzyme";

it("Devrait afficher Fizz", () => {
  const FizzComponent = mount(
    <table>
      <tbody>
        <tr>
          <ElementFizz  />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>Fizz</span>;

  expect(FizzComponent.contains(output)).toEqual(true);
});
