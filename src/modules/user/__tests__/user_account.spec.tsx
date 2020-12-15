import React from 'react';
import { render, mount } from 'enzyme';

import UserAccount from '../index';

describe(UserAccount, () => {
  describe("Render", () => {
    let wrapper: any;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<UserAccount />);
    });

    it('should add the HTML elements', () => {
      
    });

    it('should not include any name by default', () => {
      // Comprobamos el texto
      expect(wrapper.find('b.name').text()).toBe('M');
    })
  });

  describe("Features", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = mount(<UserAccount />);
    });

    it('should pass the ref to the input', () => {
      
    });

    it('should not update the state on typing', () => {
      
    });

    it('should update the state when submit', () => {
      
    });
  });
});
