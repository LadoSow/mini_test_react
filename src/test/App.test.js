import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

import { shallow, mount } from 'enzyme';

it("Tout devrait s'affiche sans crash", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Le titre devrait s'afficher sans crash", () => {
  const wrapper = shallow(<App />);
  const appTitle = <h1 className="header-title">React Fizz-Buzz</h1>;
  expect(wrapper.contains(appTitle)).toEqual(true);
});

it("Devrait changer letat apres changement du value de l'action", () => {
  const newAction = 0;
  const wrapper = mount(<App />);
  const input = wrapper.find("#action");

  input.simulate('change', { target: { id: "action", value: newAction } });

  expect(wrapper.state().action).toEqual(newAction);
});

it("Devrait afficher 100 elements", () => {
  const newLimit = 100;
  const wrapper = mount(<App />);

  expect(wrapper.state().limit).toEqual(newLimit);
});