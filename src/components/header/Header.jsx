import { useNavigate, useSearchParams } from 'react-router-dom'
import './Header.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Header() {

    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const getSuggestions = setTimeout(() => {
            axios
            .get(`http://127.0.0.1:5000/suggestions/${searchInput}`)
            .then((response) => {
                console.log(response.data);
                setSuggestions(response.data);
            });
        }, 2000)
        return () => clearTimeout(getSuggestions)
    }, [searchInput]) 

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
            <input type='text' id='search-box' onChange={(event) => setSearchInput(event.target.value)} placeholder='Search for a specific artist or album...' />
            
            <div id='menu'>
                <div className='menu-section' onClick={() => goToArtists()}>Artists</div>
                <div className='menu-section' onClick={() => goToAlbums()}>Albums</div>
            </div>

            <div id='user-section'>Hello, User!</div>
        </div>
    )
}
