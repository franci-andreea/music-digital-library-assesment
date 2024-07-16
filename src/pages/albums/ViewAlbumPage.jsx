import { useParams } from 'react-router-dom'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './ViewAlbumPage.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewAlbumPage() {

    const params = useParams();
    const artistId = params.artistId;
    const albumName = params.title;

    const [album, setAlbum] = useState();

    async function getAlbum() {
        return await axios.get(`http://127.0.0.1:5000/artists/${artistId}/albums/${albumName}`)
            .then(
                (response) => {
                    console.log(response.data.data)
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
        getAlbum().then((val) => setAlbum(val));
    }, [])

    return (
        <div>
            <Header />
            {(album) ?
                <div id='album-details-wrapper'>
                    <div id='album-description'>
                        <div id='album-title'>
                            <h1>{album.album.title}</h1>
                            <p>{album.artist_name}</p>
                        </div>

                        <h3>Description</h3>
                        <p>
                            {album.album.description}
                        </p>

                        <div id='button-section'>
                            <button className='edit-button'>Edit album</button>
                            <button className='delete-button'>Delete album</button>
                        </div>
                    </div>

                    <div id='album-songs-wrapper'>
                        <h1>Songs</h1>

                        <div id='album-songs'>
                            {album.album.songs.map((song) =>
                                <div className='song-bubble'>
                                    <div className='song-info'>
                                        <h3>{song.title}</h3>
                                        <p>{album.artist_name}</p>
                                    </div>

                                    <p>{song.length}</p>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                : <h1>Loading...</h1>}
            <Footer />
        </div>
    )
}
