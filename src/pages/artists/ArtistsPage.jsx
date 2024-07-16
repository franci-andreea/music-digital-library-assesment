import { useEffect, useState } from "react";
import ArtistsList from "../../components/artists_list/ArtistsList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './ArtistsPage.scss'
import axios from "axios";

export default function ArtistsPage() {
    
    const [artists, setArtists] = useState([]);

    async function getArtists() {
        return await axios.get('http://127.0.0.1:5000/artists')
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
        getArtists().then((val) => setArtists(val));
    }, [])
    
    
    return (
        <div>
            <Header />
            <div id="artists-wrapper">
                <div className="title-section">
                    <h1>Your artists</h1>
                    <div id="sorting-section">
                        <h4>Sort by: </h4>
                        <button id="sort-az-button">A-Z</button>
                        <button id="sort-za-button">Z-A</button>
                    </div>
                </div>
                <ArtistsList artists={artists}/>
            </div>
            <Footer />
        </div>
    )
}
