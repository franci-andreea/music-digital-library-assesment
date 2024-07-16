import { useNavigate } from 'react-router-dom'
import './AlbumsList.scss'
import computeAlbumDuration from '../../utils';

export default function AlbumsList({ albums }) {

    const navigate = useNavigate();

    function goToAlbum(artistId, albumName) {
        navigate(`/artist/${artistId}/albums/${albumName}`)
    }

    return (
        <div id="albums-section">
            {albums.map((album) =>
                <div className='artist-album-bubble' onClick={() => goToAlbum(album.artist_id, album.album_name.title)}>
                    <h3>{album.album_name.title}</h3>
                    <hr className='line' />
                    <p>{album.artist_name} | {computeAlbumDuration(album.album_name.songs)} </p>
                </div>
            )}
        </div>
    )
}
