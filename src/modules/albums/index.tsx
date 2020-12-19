import React from 'react';
import { connect } from 'react-redux';

// Interfaces
import { IAlbum } from './albums.interfaces';

// Acciones
import { getAlbums } from '../../actions/albums';

// Componentes
import AlbumsList from './albums_list';
import FullScreenLoader from '../../components/suspense_loader';

interface IAlbumsProps {
    getAlbums?: any;
    isLoading?: boolean;
    error?: string;
    albums?: IAlbum[];
}

class AlbumsIndex extends React.Component<IAlbumsProps> {
    componentDidMount() {
        this.props.getAlbums();
    }

    renderAlbums() {
        const { isLoading, error, albums } = this.props;

        if (isLoading) {            
            return <FullScreenLoader />;            
        } else if (error) {
            return <p>Hubo un error al obtener los datos de los álbumes</p>;
        } else {
            return <AlbumsList key='albumsList' albums={albums ? albums : []} />;
        }
    }

    render() {
        return (
            <>                
                {this.renderAlbums()}
            </>
        );
    }
}

const mapStateToProps = (state: any) => ({
    ...state,
});

const mapDispatchToProps = (dispatch: any) => ({
    getAlbums: () => dispatch(getAlbums()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AlbumsIndex);
