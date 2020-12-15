import React from 'react';
import { connect } from 'react-redux';

// Interfaces
import { IAlbum } from '../albums/albums.interfaces';
// Componentes
import SongsList from './songsList';
// CSS
import "./index.css";

interface ISongsProps {
    albums?: IAlbum[];
}

class SongIndex extends React.Component<ISongsProps> {
    private album: IAlbum | undefined;

    constructor(props: any) {
        super(props);
        const { albums } = this.props;
        const { albumId } = (this.props as any).match.params;

        this.album = albums ? albums.find(album => album.id === parseInt(albumId, 10)) : undefined;
    }

    render() {
        return (
            <>                
                <div className='container'>
                    <span className='title'>{this.album?.name} - {this.album?.artist}</span>
                </div>
                <SongsList key='songsList' album={this.album ? this.album : {} as IAlbum} />
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    ...state,
});

export default connect(
    mapStateToProps,
)(SongIndex);
