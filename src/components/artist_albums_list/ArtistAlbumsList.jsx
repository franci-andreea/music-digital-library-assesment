import { useNavigate } from 'react-router-dom'
import './ArtistAlbumsList.scss'
import computeAlbumDuration from '../../utils';

export default function ArtistAlbumsList({ albums }) {

    const navigate = useNavigate();

    function goToAlbum() {
        navigate(`/artist/album/${title}`);
    }

    return (
        <div id='artist-albums-wrapper'>

            {albums.map((album) =>
                <div className='artist-album-bubble' onClick={() => goToAlbum(album.title)}>
                    <h3>{album.title}</h3>
                    <hr className='line' />
                    <p>{album.songs.length} songs | Total: {computeAlbumDuration(album.songs)} </p>
                </div>
            )}

        </div>
    )
}
