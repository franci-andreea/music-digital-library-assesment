import './App.scss'

function App() {

  return (
    <div>
      <div className='header'>
        <div id='home-section'>Home</div>
        <input type='text' id='search-box' placeholder='Search for a specific artist or album...' />

        <div id='menu'>
          <div className='menu-section'>Artists</div>
          <div className='menu-section'>Albums</div>
        </div>

        <div id='user-section'>Hello, User!</div>
      </div>

      <div id='content-wrapper'>
        <h2>Here are some recent viewed artists</h2>
        <div id='recent-artists-list'>

        </div>

        <h2>Here are some recent viewed albums</h2>
        <div id='recent-albums-list'>

        </div>
      </div>
    </div>
  )
}

export default App
