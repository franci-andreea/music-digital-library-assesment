import { useNavigate } from 'react-router-dom'
import './Header.scss'

export default function Header() {

    const navigate = useNavigate();

    function goToHomepage() {
        navigate('/');
    }

    function goToArtists() {
        navigate('/artists')
    }

    function goToAlbums() {
        navigate('/albums')
    }

    return (
        <div className='header'>
            <div id='home-section' onClick={() => goToHomepage()}>Home</div>
            <input type='text' id='search-box' placeholder='Search for a specific artist or album...' />

            <div id='menu'>
                <div className='menu-section' onClick={() => goToArtists()}>Artists</div>
                <div className='menu-section' onClick={() => goToAlbums()}>Albums</div>
            </div>

            <div id='user-section'>Hello, User!</div>
        </div>
    )
}
