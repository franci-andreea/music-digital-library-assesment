import AlbumsList from "../../components/albums_list/AlbumsList";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import './AlbumsPage.scss'

export default function AlbumsPage() {
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
                            <option value="1">Artist Name1</option>
                            <option value="2">Artist Name2</option>
                            <option value="3">Artist NAME 33333</option>
                        </select>
                    </div>
                </div>

                <AlbumsList/>
            </div>
            <Footer />
        </div>
    )
}
