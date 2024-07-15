import { useNavigate } from 'react-router-dom'
import './ArtistAlbumsList.scss'

export default function ArtistAlbumsList() {

    const navigate = useNavigate();

    function goToAlbum() {
        navigate('/artist/album');
    }

    return (
        <div id='artist-albums-wrapper'>
            <div className='artist-album-bubble' onClick={() => goToAlbum()}>
                <h3>Album name</h3>
                <hr className='line' />
                <p>Number of songs: w | Total: xh, ym, zs </p>
            </div>
        </div>
    )
}
