import ArtistsList from "../../components/artists_list/ArtistsList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './ArtistsPage.scss'

export default function ArtistsPage() {
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
                <ArtistsList />
            </div>
            <Footer />
        </div>
    )
}
