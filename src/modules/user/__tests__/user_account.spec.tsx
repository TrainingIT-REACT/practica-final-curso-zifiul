import React from 'react';
import { render, mount, configure } from 'enzyme';

import UserAccount from '../index';

describe(UserAccount, () => {
  describe("Render", () => {
    let wrapper: any;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<UserAccount />);
    });

    it('should add the correct HTML elements', () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper).toMatchSnapshot();
    });

    describe('promise', () => { 
      it('should resolve', () => { 
        return Promise.resolve('test').then(data => { 
          expect(data).toBe('test') 
        }); 
      }); 
    });
  });

  describe("Features", () => {
    let wrapper;

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = mount(<UserAccount />);
    });    
  });
});
