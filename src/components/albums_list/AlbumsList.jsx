import './AlbumsList.scss'

export default function AlbumsList() {
    return (
        <div id="albums-section">
            <div className='artist-album-bubble' onClick={() => goToAlbum()}>
                <h3>Album name</h3>
                <hr className='line' />
                <p>Artist Name | Total: xh, ym, zs </p>
            </div>
        </div>
    )
}
