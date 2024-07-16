import { useEffect, useState } from "react";
import AlbumsList from "../../components/albums_list/AlbumsList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './AlbumsPage.scss'
import axios from "axios";

export default function AlbumsPage() {

    const [albums, setAlbums] = useState([]);

    async function getAlbums() {
        return await axios.get('http://127.0.0.1:5000/albums')
        .then(
            (response) => {
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
        getAlbums().then((val) => setAlbums(val));
    }, [])

    return(
        <div>
            <Header />
            <div id="albums-wrapper">
                <div className="title-section">
                    <h1>Your albums</h1>
                    <div id="filter-section">
                        <h4>Filter by your preferred artist: </h4>
                        <select>
                            <option value="0">Select artist:</option>
                            {albums.map((album) =>
                                <option value={album.artist_name}>{album.artist_name}</option>
                            )}
                        </select>
                    </div>
                </div>

                <AlbumsList albums={albums}/>
            </div>
            <Footer />
        </div>
    )
}
