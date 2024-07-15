import ArtistAlbumsList from '../../components/artist_albums_list/ArtistAlbumsList'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import './ViewArtistPage.scss'

export default function ViewArtistPage() {
    return (
        <div>
            <Header />
            <div id='artist-page-wrapper'>
                <div id='artist-title-section'>
                    <h1 id='artist-name'>ARTIST NAME</h1>
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
                <ArtistAlbumsList />
            </div>
            <Footer />
        </div>
    )
}
