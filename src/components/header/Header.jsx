import './Header.scss'

export default function Header() {
    return (
        <div className='header'>
            <div id='home-section'>Home</div>
            <input type='text' id='search-box' placeholder='Search for a specific artist or album...' />

            <div id='menu'>
                <div className='menu-section'>Artists</div>
                <div className='menu-section'>Albums</div>
            </div>

            <div id='user-section'>Hello, User!</div>
        </div>
    )
}
