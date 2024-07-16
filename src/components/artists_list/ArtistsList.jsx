import { useNavigate } from 'react-router-dom'
import './ArtistsList.scss'

export default function ArtistsList({ artists }) {

    const navigate = useNavigate();

    function goToArtist() {
        navigate('/artist');
    }

    return (
        <div id="artists-list">
            {artists.map((artist) =>
                <div className="artist-bubble" key={artist._id} onClick={() => goToArtist()}>
                    <h2>{artist.name}</h2>
                    <hr className="line" />
                    <h5>
                        Albums available:
                        {artist.albums.map(album =>
                            <h6>{album.title}</h6>
                        )}
                    </h5>
                </div>
            )}

        </div>
    )
}
