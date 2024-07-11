import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import RecentList from './components/recent_list/RecentList'
import WelcomeMessage from './components/welcome_message/WelcomeMessage'

function App() {
  return (
    <div>
      <Header />

      <div id='content-wrapper'>
        <WelcomeMessage />
        
        <div id='artist-section'>
          <h2>Here are some recent viewed artists</h2>
          <RecentList />
        </div>
        
        <div id='album-section'>
          <h2>Here are some recent viewed albums</h2>
          <RecentList />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
