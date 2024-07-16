import { useNavigate } from 'react-router-dom'
import './AlbumsList.scss'

export default function AlbumsList() {

    const navigate = useNavigate();

    function goToAlbum() {
        navigate('/artist/album')
    }

    return (
        <div id="albums-section">
            <div className='artist-album-bubble' onClick={() => goToAlbum()}>
                <h3>Album name</h3>
                <hr className='line' />
                <p>Artist Name | Total: xh, ym, zs </p>
            </div>
        </div>
    )
}
