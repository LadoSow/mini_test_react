import React from 'react';
import ElementBuzz from '../microcomposants/liste/ElementBuzz';

import { mount } from "enzyme";

it("Devrait afficher FizzBuzz", () => {
  const BuzzComponent = mount(
    <table>
      <tbody>
        <tr>
          <ElementBuzz />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>Buzz</span>;

  expect(BuzzComponent.contains(output)).toEqual(true);
});
