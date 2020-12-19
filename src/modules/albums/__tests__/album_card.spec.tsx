import React from 'react';
import { render, mount, configure, shallow } from 'enzyme';
import AlbumCard from '../album_card';
import { IAlbum } from '../albums.interfaces';

const album: IAlbum = {
    id: 3,
    artist: "Elvis Presley",
    name: "Moody Blue",    
}

describe(AlbumCard, () => {
  describe("Render", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = render(<AlbumCard album={album} />);
    });

    it('should have to fields', () => {
      expect(wrapper.find('#albumName').length).toEqual(1);
      expect(wrapper.find('#artistName').length).toEqual(1);
    });    
  });

  describe("Features", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<AlbumCard album={album} />);      
    });

    it('should include values by default', () => {
      expect(wrapper.find('#albumName').text()).toBe('Moody Blue');
      expect(wrapper.find('#artistName').text()).toBe('Elvis Presley');
    });        
  });  
});
