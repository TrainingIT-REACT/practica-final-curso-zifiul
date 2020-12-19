import React from 'react';
import { render, mount, configure, shallow } from 'enzyme';
import UserAccount from '../index';


describe(UserAccount, () => {
  describe("Render", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = render(<UserAccount />);
    });

    it('should add the correct HTML elements', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should have a text field with id name', () => {
      expect(wrapper.find('#name').length).toEqual(1);
    });

    it('should have a button with updateButton name', () => {
      expect(wrapper.find('#updateButton').length).toEqual(1);
    });    
  });

  describe("Features", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<UserAccount />);      
    });

    it('should not include any name by default', () => {
      // Comprobamos el texto
      expect(wrapper.find('#name').text()).toBe('');
    });        
  });  
});
