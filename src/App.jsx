import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'

function App() {
  return (
    <div>
      <Header />

      <div id='content-wrapper'>
        <div id='artist-section'>
          <h2>Here are some recent viewed artists</h2>
          <div id='recent-list'>
            <div className='list-bubble'>
              Artist Name #1
            </div>

            <div className='list-bubble'>
              Artist Name #2
            </div>

            <div className='list-bubble'>
              Artist Name #3
            </div>
          </div>
        </div>
        
        <div id='album-section'>
          <h2>Here are some recent viewed albums</h2>
          <div id='recent-list'>
            <div className='list-bubble'>
              Album Name #1
            </div>

            <div className='list-bubble'>
              Album Name #2
            </div>

            <div className='list-bubble'>
              Album Name #3
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
