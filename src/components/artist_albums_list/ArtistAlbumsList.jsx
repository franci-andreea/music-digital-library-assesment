import { useNavigate } from 'react-router-dom'
import './ArtistAlbumsList.scss'
import computeAlbumDuration from '../../utils';

export default function ArtistAlbumsList({ albums, artistId }) {

    const navigate = useNavigate();

    function goToAlbum(artistId, title) {
        navigate(`/artists/${artistId}/albums/${title}`);
    }

    console.log(albums)

    return (
        <div id='artist-albums-wrapper'>

            {albums.map((album) =>
                <div className='artist-album-bubble' onClick={() => goToAlbum(artistId, album.title)}>
                    <h3>{album.title}</h3>
                    <hr className='line' />
                    <p>{album.songs.length} songs | Total: {computeAlbumDuration(album.songs)} </p>
                </div>
            )}

        </div>
    )
}
