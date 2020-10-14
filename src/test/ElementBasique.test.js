import React from 'react';
import ElementBasique from '../microcomposants/liste/ElementBasique';

import { mount } from 'enzyme';

it("Devrait afficher une valeur", () => {
  const valeur = 15;
  const basicComponent = mount(
    <table>
      <tbody>
        <tr>
          <ElementBasique valeur={valeur} />
        </tr>
      </tbody>
    </table>
  );

  const output = <span>{valeur}</span>;

  expect(basicComponent.contains(output)).toEqual(true);
});
