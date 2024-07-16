import { useParams } from 'react-router-dom'
import ArtistAlbumsList from '../../components/artist_albums_list/ArtistAlbumsList'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './ViewArtistPage.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ViewArtistPage() {

    const params = useParams();
    const [artist, setArtist] = useState();

    async function getArtist() {
        return await axios.get(`http://127.0.0.1:5000/artists/${params.artistId}`)
            .then(
                (response) => {
                    console.log(response.data)
                    return response.data.data;
                })
            .catch(
                (error) => {
                    console.log("Error while retrieving data from backend!");
                    console.log(error);
                    return [];
                }
            )
    }

    useEffect(() => {
        getArtist().then((val) => setArtist(val));
    }, [])

    return (
        <div>
            <Header />
            <div id='artist-page-wrapper'>
                {
                    (artist) ?
                        <>
                            <div id='artist-title-section'>
                                <h1 id='artist-name'>{artist.name}</h1>
                            </div>

                            <div id='about-artist-section'>
                                <h4>About artist</h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                    sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum.
                                </p>
                            </div>

                            <div id='artist-button-section'>
                                <button className='edit-button'>Edit Artist</button>
                                <button className='delete-button'>Delete Artist</button>
                            </div>

                            <h2>Albums</h2>
                            <hr id='album-line'></hr>
                            <ArtistAlbumsList artistId={artist._id} albums={artist.albums}/>
                        </>
                        : <p>Loading...</p>
                }
            </div>
            <Footer />
        </div>
    )
}
