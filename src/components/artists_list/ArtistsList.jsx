import './ArtistsList.scss'

export default function ArtistsList() {
    return(
        <div id="artists-list">
            <div className="artist-bubble">
                <h2>Artist Name1</h2>
                <hr id="line"/>
                <h5>
                    Albums: 
                    <br/>
                    Album Name1, Album Name2, Album Name3
                </h5>
            </div>

            <div className="artist-bubble">
                <h2>Artist Name2</h2>
                <hr id="line"/>
                <h5>
                    Albums: 
                    <br/>
                    Album Name1, Album Name2, Album Name3
                </h5>
            </div>

            <div className="artist-bubble">
                <h2>Artist Name3</h2>
                <hr id="line"/>
                <h5>
                    Albums: 
                    <br/>
                    Album Name1, Album Name2, Album Name3
                </h5>
            </div>

            <div className="artist-bubble">
                <h2>Artist Name4</h2>
                <hr id="line"/>
                <h5>
                    Albums: 
                    <br/>
                    Album Name1, Album Name2, Album Name3
                </h5>
            </div>
        </div>
    )
}
