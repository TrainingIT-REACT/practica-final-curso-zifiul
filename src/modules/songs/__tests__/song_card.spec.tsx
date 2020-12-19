import React from 'react';
import { render, mount, configure, shallow } from 'enzyme';
import SongCard from '../song_card';
import { ISong } from '../songs.interfaces';
import { IAlbum } from '../../albums/albums.interfaces';

const album: IAlbum = {
  id: 3,
  artist: "Elvis Presley",
  name: "Moody Blue",    
}

const song: ISong = {
    id: 13,
    artist: "Elvis Presley",
    name: "Little Darlin",
    duration: "01:30",
    albumId: 3,
    audio: "/music/Little Darlin.mp3",
}

describe(SongCard, () => {
  describe("Render", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = render(<SongCard album={album} song={song} />);
    });

    it('should have to fields', () => {
      expect(wrapper.find('#songName').length).toEqual(1);
      expect(wrapper.find('#duration').length).toEqual(1);
    });    
  });

  describe("Features", () => {
    let wrapper: any;

    beforeEach(() => {
      wrapper = shallow(<SongCard album={album} song={song} />);      
    });

    it('should include values by default', () => {
      expect(wrapper.find('#songName').text()).toBe('Little Darlin');
      expect(wrapper.find('#duration').text()).toBe('01:30');
    });        
  });  
});
