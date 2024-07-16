import { useNavigate } from 'react-router-dom'
import './AlbumsList.scss'

export default function AlbumsList({albums}) {

    const navigate = useNavigate();

    function goToAlbum() {
        navigate('/artist/album')
    }

    return (
        <div id="albums-section">
            {albums.map((album) => 
                <div className='artist-album-bubble' onClick={() => goToAlbum()}>
                    <h3>{album.album_name.title}</h3>
                    <hr className='line' />
                    <p>{album.artist_name} | Total: xh, ym, zs </p>
                </div>
            )} 
        </div>
    )
}
