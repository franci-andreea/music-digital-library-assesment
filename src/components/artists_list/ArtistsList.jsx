import { useNavigate } from 'react-router-dom'
import './ArtistsList.scss'

export default function ArtistsList() {

    const navigate = useNavigate();

    function goToArtist() {
        navigate('/artist');
    }

    return(
        <div id="artists-list">
            <div className="artist-bubble" onClick={() => goToArtist()}>
                <h2>Artist Name1</h2>
                <hr className="line"/>
                <h5>
                    Albums: 
                    <br/>
                    Album Name1, Album Name2, Album Name3
                </h5>
            </div>
        </div>
    )
}
